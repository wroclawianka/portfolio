import avatar from './../../assets/avatar.jpeg';

export const animatedPictureTheme = {
    animatedPicture: {
        parts: ['root'],
        baseStyle: {
            imageBorder: {
                // borderRadius: "full",
                width: '300px',
                height: '300px',
                backgroundSize: '300px 300px',
                backgroundColor: '#eee',
                backgroundImage: avatar,
                position: 'relative',
                zIndex: 1
            },
            imageBorderAfter: {
                content: `''`,
                position: 'absolute',
                width: '290px',
                height: '290px',
                left: '5px',
                top: '5px',
                backgroundColor: '#fff'
            },
            mainPicture: {
                // borderRadius: "full",
                position: 'absolute',
                width: '290px',
                height: '290px',
                left: '5px',
                top: '5px',
                backgroundImage: avatar,
                backgroundSize: '300px 300px',
                backgroundPosition: 'center center',
                zIndex: '2',
                transition: '.5s cubic-bezier(.5,.03,.41,1)'
            },
            mainPictureHover: {
                transform: 'translate(-15px, -15px)',
                transition: '.5s cubic-bezier(.5,.03,.41,1)'
            }
        }
    }
};
