const chatData = [
  {
    id: 1,
    name: 'Tommy Thomas',
    lastMessage: "I'm sorry, I didn't catch that, Could you ple...",
    time: 'Just now',
    unread: 0,
    isGroup: false,
    avatar: 'https://i.pravatar.cc/150?img=1',
    messages: [
      { text: 'Hi Catherine 👋', type: 'sent', time: '9:12am' },
      { text: "I'm sorry, I didn't catch that.", type: 'received', time: '9:12am' }
    ]
  },
  {
    id: 2,
    name: 'Themeforest Group',
    lastMessage: "Jeny: That's pretty common, I heard th...",
    time: '10:20 pm',
    unread: 0,
    isGroup: true,
    avatar: null,
    messages: [
      { text: 'Hello Team', type: 'sent', time: '10:20pm' },
      { text: "Jenny: That's pretty common", type: 'received', time: '10:21pm' },
      { text: "Hello jeni ", type: 'received', time: '12:35pm' }
    ]
  },
  {
    id: 3,
    name: 'Eva Walker',
    lastMessage: "You're Kidding! I drive a motorcycle as...",
    time: '09:36 am',
    unread: 1,
    isGroup: false,
    avatar: 'https://i.pravatar.cc/150?img=5',
    messages: [
      { text: "You're Kidding! I drive a motorcycle as well!", type: 'received', time: '09:36am' }
    ]
  },
  {
    id: 4,
    name: 'Christopher Garcia',
    lastMessage: '📷 Photo',
    time: 'Yesterday',
    unread: 0,
    isGroup: false,
    avatar: 'https://i.pravatar.cc/150?img=12',
    messages: [
      { text: '📷 Photo', type: 'received', time: 'Yesterday' }
    ]
  },
  {
    id: 5,
    name: 'Christina Turner',
    lastMessage: "I'm working hard in Maths, Physics an...",
    time: '31/05/20',
    unread: 10,
    isGroup: false,
    avatar: 'https://i.pravatar.cc/150?img=20',
    messages: [
      { text: "I'm working hard in Maths, Physics and Chemistry", type: 'received', time: '31/05/20' }
    ]
  },
  {
    id: 6,
    name: 'Tammy Martinez',
    lastMessage: '📄 project_guidelines.docs',
    time: '24/04/20',
    unread: 0,
    isGroup: false,
    avatar: 'https://i.pravatar.cc/150?img=25',
    messages: [
      { text: '📄 project_guidelines.docs', type: 'received', time: '24/04/20' }
    ]
  },
  {
    id: 7,
    name: 'Muthuprakash',
    lastMessage: 'Hello, How are you?',
    time: '10:45 AM',
    unread: 2,
    isGroup: false,
    avatar: 'https://i.pravatar.cc/150?img=33',
    messages: [
      { text: 'Hello, How are you?', type: 'received', time: '10:45 AM' }
    ]
  },
  {
    id: 8,
    name: 'Bala',
    lastMessage: 'Hello, How are you?',
    time: '02:45 PM',
    unread: 55,
    isGroup: false,
    avatar: 'https://i.pravatar.cc/150?img=60',
    messages: [
      { text: 'Hello, How are you?', type: 'received', time: '02:45 PM' }
    ]
  }
]

export default chatData
