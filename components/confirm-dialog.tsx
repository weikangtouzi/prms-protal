import * as DialogPrimitive from '@radix-ui/react-dialog';
import { styled } from '../stitches.config';
import PrimaryButton from './primary-button';
import Icon from './icon';

const StyledOverlay = styled(DialogPrimitive.Overlay, {
    backgroundColor: 'rgba(0,0,0,0.6)',
    position: 'fixed',
    inset: 0,
});

function Root({ children, ...props }: any) {
    return (
        <DialogPrimitive.Root {...props}>
            <StyledOverlay />
            {children}
        </DialogPrimitive.Root>
    );
}
const StyledContent = styled(DialogPrimitive.Content, {
    backgroundColor: '$w',
    borderRadius: 2,
    position: 'fixed',
    top: 278,
    left: '50%',
    transform: 'translate(-50%, -50%)',
    w: 512,
    h: 238,
    p: '94px 62px 0',
    color: '#3C4441',
    textAlign: 'center',
    ff: '$fr',
    '&:focus': { outline: 'none' },
});

const StyledTitle = styled(DialogPrimitive.Title, {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    position: 'absolute',
    top: '2px',
    left: '50%',
    transform: 'translate(-50%, -50%)',
});

const TitledText = styled('div', {
    fs: 26,
    fw: 600,
    color: 'black',
});

const Dialog = Root;
const DialogContent = StyledContent;
const DialogTitle = StyledTitle;

interface IProps {
    title: string;
    bodyText: string;
    open: boolean;
    onOpenChange: (o: boolean) => void;
}

export default function ConfirmDialog({ title, bodyText, open, onOpenChange }: IProps) {
    return (
        <Dialog modal open={open} onOpenChange={onOpenChange}>
            <DialogContent
                onOpenAutoFocus={(e) => {
                    e.preventDefault();
                }}
                onPointerDownOutside={(e) => {
                    e.preventDefault();
                }}>
                <DialogTitle>
                    <Icon css={{ size: 70, mb: 13 }} withClassName={false} name='icon-icon_gantanhao' />
                    <TitledText>{title}</TitledText>
                </DialogTitle>
                {bodyText}
                <div>
                    <PrimaryButton
                        onClick={() => {
                            onOpenChange(false);
                        }}
                        css={{ mt: 20, mr: 40, w: 120, h: 46, backgroundColor: '$w', color: '#3C4441', border: '1px solid rgba(0, 0, 0, 0.2)' }}
                        text='取消'
                    />
                    <PrimaryButton
                        css={{ mt: 20, w: 120, h: 46 }}
                        text='确定'
                        onClick={() => {
                            console.log('queding');
                            onOpenChange(false);
                        }}
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
}
