import {COLORS} from './theme'

export const FORM = {
  Organisation: {
    type: 'list',
    values: [
      "Men's Fellowship",
      "Women's Fellowship",
      'Guild',
      "Christ's Little Band",
      'Choir',
      'Vessels',
      'Youth Fellowship',
      'SUWMA',
    ],
  },
  Age: {
    type: 'list',
    values: [
      '14 - 18',
      '19 - 22',
      '23 - 28',
      '29 - 35',
      '36 - 42',
      '43 - 48',
      '49 - 54',
      '55 - 60',
      '60+',
    ],
  },
  Category: {
    type: 'list',
    values: [
      'Chapel',
      'Manse',
      'Bus',
      'Bible Class',
      'Bulletin',
      'Chapel Reconstruction',
      'Thanksgiving/Harvest',
      'Welfare',
      'Edufund',
    ],
  },
  Suggestion: {
    type: 'text',
    values: null,
  },
} as const

export const DASH_BUTTONS = {
  Profile: {
    icon: 'account',
    gradient: ['#FFA000', '#FC490B'],
  },
  Society: {
    icon: 'account-multiple',
    gradient: ['#0098FF', '#764ABC'],
  },
  Class: {
    icon: 'book',
    gradient: ['#53C1DE', '#539E43'],
  },
  Tithe: {
    icon: 'heart',
    gradient: ['#AF92DD', '#CF649A'],
  },
  Hymns: {
    icon: 'book-open',
    gradient: ['#53C1DE', '#0098FF'],
  },
  Bulletin: {
    icon: 'microphone-variant',
    gradient: ['#A5A5A5', '#53C1DE'],
  },
  Suggestion: {
    icon: 'comment-alert',
    gradient: ['#E255AA', '#AF2B2B'],
  },
  Service: {
    icon: 'information',
    gradient: ['#53C1DE', '#764ABC'],
  },
} as const

export const CLASSES = {
  'Class 1':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 2':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 3':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 4':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 5':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 6':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 7':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 8':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 9':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
  'Class 10':
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur at commodo sem. Donec dapibus tincidunt malesuada. Vivamus odio orci, finibus pulvinar mauris quis, hendrerit suscipit nunc. Cras aliquet lectus nec placerat suscipit. Aenean varius, ex eget molestie vehicula, dolor lorem varius velit, suscipit semper tortor risus hendrerit sem. Integer commodo dui a sapien vulputate dignissim. Fusce eu egestas libero. Nunc molestie condimentum ipsum. Nunc sed iaculis neque. Donec tristique ultricies consectetur. Vestibulum sit amet tortor arcu.',
}

export const ANNOUNCEMENTS = {
  'Service Reschedule':
    'Nulla scelerisque neque ut erat tincidunt efficitur. Maecenas ac eros efficitur, ullamcorper nunc vitae, ullamcorper arcu. Mauris cursus lectus pulvinar scelerisque consectetur. Donec tempus porta odio, at interdum metus congue venenatis. Vivamus metus urna, imperdiet eu neque ut, molestie sollicitudin sapien. Sed tempus leo eget hendrerit consectetur. Integer mi quam, rutrum id odio ut, ultrices viverra tortor. Donec viverra pretium neque eget porta.',
  'Job Posting':
    'Nulla scelerisque neque ut erat tincidunt efficitur. Maecenas ac eros efficitur, ullamcorper nunc vitae, ullamcorper arcu. Mauris cursus lectus pulvinar scelerisque consectetur. Donec tempus porta odio, at interdum metus congue venenatis. Vivamus metus urna, imperdiet eu neque ut, molestie sollicitudin sapien. Sed tempus leo eget hendrerit consectetur. Integer mi quam, rutrum id odio ut, ultrices viverra tortor. Donec viverra pretium neque eget porta.',
  'Tithe Information':
    'Nulla scelerisque neque ut erat tincidunt efficitur. Maecenas ac eros efficitur, ullamcorper nunc vitae, ullamcorper arcu. Mauris cursus lectus pulvinar scelerisque consectetur. Donec tempus porta odio, at interdum metus congue venenatis. Vivamus metus urna, imperdiet eu neque ut, molestie sollicitudin sapien. Sed tempus leo eget hendrerit consectetur. Integer mi quam, rutrum id odio ut, ultrices viverra tortor. Donec viverra pretium neque eget porta.',
  'Building Project':
    'Vivamus mattis ultrices augue in euismod. Quisque at lacus nunc. Curabitur id commodo justo. Ut lorem diam, aliquam dapibus posuere blandit, aliquam ut nisl. Sed egestas convallis justo nec placerat. Morbi facilisis sapien ut mauris placerat, eu sagittis velit mattis. Phasellus fermentum mi eu sapien suscipit, id luctus nibh lacinia. Sed lacinia nibh nulla, vel volutpat odio tempus vitae. Nulla sit amet hendrerit urna. Donec maximus sodales nisi, porttitor finibus neque porttitor ac.',
}

export const SERVICE = {
  'Sunday Meetings':
    'Main Sunday service || Sundays || 8:00am',
  'Bible Studies':
    'Meeting to study the word || Mondays || 6:00pm',
  'Youth Service':
    'Meeting day for the youth || Thursdays || 6:00pm',
  'Prayer Night':
    'Meeting for night prayers || Mondays - Fridays || 6:00pm',
}
