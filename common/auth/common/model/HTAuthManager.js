import React from 'react'
// import { DeviceEventEmitter } from 'react-native'

export default class HTAuthManager {

	static kHTUserRoleDidChangeNotice = 'kHTUserRoleDidChangeNotice'

	static kHTUserTokenDidChangeNotice = 'kHTUserTokenDidChangeNotice'



	static kHTSocketMessageDidReceiveNotice = 'kHTSocketMessageDidReceiveNotice'

	static kHTSocketContractDidReceiveNotice = 'kHTSocketContractDidReceiveNotice'



	static kHTAuthKeyValueStorageKey = 'kHTChenZaoZhaoAuthKeyValueStorageKey'

	static keyValueList = {}

	static init = () => {
		this.syncReadKeyValueList()
	}

	static updateKeyValueList = (valueList) => {
		let updateValueList = valueList ?? {}
		let lastValueList = this.syncReadKeyValueList() ?? {}
		let reloadValueList = { ...lastValueList, ...updateValueList }
		this.keyValueList = reloadValueList
		if (process.browser) {
			// localStorage.setItem(this.kHTAuthKeyValueStorageKey, JSON.stringify(reloadValueList))
			const exp = new Date()
	  		exp.setTime(exp.getTime() + 30 * 24 * 60 * 60 * 1000)
			document.cookie = `${this.kHTAuthKeyValueStorageKey}=${escape(JSON.stringify(reloadValueList))};domain=chenzaozhao.com;path=/;expires=${exp.toUTCString()}`
			document.cookie = `${this.kHTAuthKeyValueStorageKey}=${escape(JSON.stringify(reloadValueList))};path=/;expires=${exp.toUTCString()}`
		}
		if (lastValueList.userToken != reloadValueList.userToken) {
			// DeviceEventEmitter.emit(this.kHTUserTokenDidChangeNotice)
		}
		if (lastValueList.userRole != reloadValueList.userRole) {
			this.sendUserRoleDidChangeNotice()
			// global.reloadRootViewController()
		}
	}

	static sendUserRoleDidChangeNotice = () => {
		// DeviceEventEmitter.emit(this.kHTUserRoleDidChangeNotice)
	}

	static syncReadKeyValueList = () => {
		if (!process.browser) {
			return {}
		}
		let value = null
		try {
			if (process.browser) {
				// value = localStorage.getItem(this.kHTAuthKeyValueStorageKey) ?? {}
				value = unescape(document.cookie.match(new RegExp(`(^| )${this.kHTAuthKeyValueStorageKey}=([^;]*)(;|$)`))[2])
			}
			value = JSON.parse(value)
		} catch(e) {}
		this.keyValueList = value
		return value
	}

	static clearLoginInfo = () => {
		this.updateKeyValueList({ userToken: '', enterpriseToken: '', userRole: '' })
	}

}