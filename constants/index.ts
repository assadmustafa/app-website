// NAVIGATION
export const NAV_LINKS = [
    { href: '/', key: 'home', label: 'Home' },
    { href: '/', key: 'how_app_work', label: 'How App Work?' },
    { href: '/', key: 'services', label: 'Services' },
    { href: '/', key: 'pricing ', label: 'Pricing ' },
    { href: '/', key: 'contact_us', label: 'Contact Us' },
  ];

export interface AppProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  downloads: string;
}
  
  
  // FEATURES SECTION
  export const FEATURES = [
    {
      title: 'Real maps can be offline',
      icon: '/map.svg',
      description:
        'We provide a solution for you to be able to use our application when climbing, yes offline maps you can use at any time there is no signal at the location',
    },
    {
      title: 'Set an adventure schedule',
      icon: '/calendar.svg',
      description:
        "Schedule an adventure with friends. On holidays, there are many interesting offers from App. That way, there's no more discussion",
    },
    {
      title: 'Technology using augment reality',
      icon: '/tech.svg',
      description:
        'Technology uses augmented reality as a guide to your hiking trail in the forest to the top of the mountain. Already supported by the latest technology without an internet connection',
    },
    {
      title: 'Many new locations every month',
      icon: '/location.svg',
      description:
        'Lots of new locations every month, because we have a worldwide community of climbers who share their best experiences with climbing',
    },
  ];
  
  // FOOTER SECTION
  export const FOOTER_LINKS = [
    {
      title: 'Learn More',
      links: [
        'About App',
        'Press Releases',
        'Environment',
        'Jobs',
        'Privacy Policy',
        'Contact Us',
      ],

    },
    {
      title: 'Our Community',
      links: [
          'Link 1', 'Link 2', 'Link 3'
      ],
    },
  ];
  
  export const FOOTER_CONTACT_INFO = {
    title: 'Contact Us',
    links: [
      { label: 'Admin Officer', value: '123-456-7890' },
      { label: 'Email Officer', value: 'support@app.com' },
    ],
  };
  
  export const SOCIALS = {
    title: 'Social',
    links: [
      '/facebook.svg',
      '/instagram.svg',
      '/twitter.svg',
      '/youtube.svg',
      '/wordpress.svg',
    ],
  };