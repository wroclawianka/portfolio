import avatar from './../../assets/avatar.jpeg';

export const animatedAvatarTheme = {
  animatedAvatar: {
    parts: ['root'],
    baseStyle: {
      imageBorder: {
        borderRadius: 'full',
        width: '250px',
        height: '250px',
        backgroundSize: '250px 250px',
        backgroundColor: '#eee',
        backgroundImage: avatar,
        position: 'relative',
        zIndex: 1
      },
      imageBorderAfter: {
        content: '\'\'',
        position: 'absolute',
        width: '240px',
        height: '240px',
        left: '5px',
        top: '5px',
        borderRadius: 'full',
        backgroundColor: '#fff'
      },
      mainPicture: {
        borderRadius: 'full',
        position: 'absolute',
        width: '240px',
        height: '240px',
        left: '5px',
        top: '5px',
        backgroundImage: avatar,
        backgroundSize: '250px 250px',
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
