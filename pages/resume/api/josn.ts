// let API_Job_Category = process.env.NEXT_PUBLIC_JOB_CATEGORY
// let API_INDUSTRY = process.env.NEXT_PUBLIC_INDUSTRY_CATEGORY

export async function fetchJob() {
  const res = await fetch('/api-job', {
    method: 'get',
  })

  const json = await res.json()
  console.log('json', json)
  if (json.errors) {
    console.error(json.errors)
  }
  return json.data
}

export async function fetchIndustry() {
  const res = await fetch('/api-industry', {
    method: 'get',
  })

  const json = await res.json()
  if (json.errors) {
    console.error(json.errors)
  }
  return json.data
}
