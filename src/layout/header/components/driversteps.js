export const steps = (i18n) => [
    {
        element: '#guide',
        popover: {
          title: i18n('driver.guideBtn'),
          description: i18n('driver.guideDes'),
          position: 'left'
        }
    },
    {
        element: '#hamburger',
        popover: {
          title: i18n('driver.hamburgerBtn'),
          description: i18n('driver.hamburgerDes'),
          position: 'bottom'
        }
    },
    {
        element: '#screenfull',
        popover: {
          title: i18n('driver.fullScreen'),
          description: i18n('driver.screenfullDes'),
          position: 'left'
        }
    }
]
