import localFont from 'next/font/local'

export const firstplace = localFont({
  src:[
    {
      path: '../public/FirstPlace.ttf',
    },
  ],
  variable: '--font-firstplace',
})

export const lowres = localFont({
    src:[
      {
        path: '../public/LowerResolution.ttf',
      },
    ],
    variable: '--font-lowres',
  })

  export const sanfrans = localFont({
    src:[
      {
        path: '../public/SFNSDisplay-Light.otf',
        weight: '300',
      },
      {
        path: '../public/SFNSDisplay-Medium.otf',
        weight: '400',
      },
      {
        path: '../public/SFNSDisplay-Semibold.otf',
        weight: '600',
      },
      {
        path: '../public/SFNSDisplay-Bold.otf',
        weight: '700',
      },
    ],
    variable: '--font-sf',
  })