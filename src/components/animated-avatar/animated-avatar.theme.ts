import avatar from './../../assets/avatar.jpeg';

const left = '5px';
const top = left;
const transition = '.5s cubic-bezier(.5,.03,.41,1)';
const imageBorderSize = {
  base: '150px',
  md: '250px'
};
const mainPictureSize = {
  base: '140px',
  md: '240px'
};
const backgroundSize = {
  base: '150px 150px',
  md: '250px 250px'
};
const transform = {
  base: 'translate(-7px, -7px)',
  md: 'translate(-15px, -15px)'
};

export const animatedAvatarTheme = {
  animatedAvatar: {
    parts: ['root'],
    baseStyle: {
      imageBorder: {
        borderRadius: 'full',
        backgroundColor: '#eee',
        position: 'relative',
        backgroundImage: avatar,
        width: imageBorderSize,
        height: imageBorderSize,
        backgroundSize: backgroundSize,
        zIndex: 1
      },
      imageBorderAfter: {
        content: '""',
        position: 'absolute',
        borderRadius: 'full',
        backgroundColor: '#fff',
        width: mainPictureSize,
        height: mainPictureSize,
        left,
        top
      },
      mainPicture: {
        borderRadius: 'full',
        position: 'absolute',
        backgroundPosition: 'center center',
        zIndex: '2',
        backgroundSize: backgroundSize,
        width: mainPictureSize,
        height: mainPictureSize,
        backgroundImage: avatar,
        left,
        top,
        transition
      },
      mainPictureHover: {
        transform,
        transition
      }
    }
  }
};
