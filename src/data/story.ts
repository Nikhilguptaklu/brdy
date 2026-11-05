// ===================================================================
//  A LITTLE WORLD OF US — Your story, in one editable place.
//  Change anything here and it updates across the whole website.
//
//  PHOTOS — drop your photos into public/assets/photos/
//  Each slot is independent. Replace any one without affecting others.
//
//    Chapter 1 → photo1-1.jpg                              (1 photo)
//    Chapter 2 → photo2-1.jpg                              (1 photo)
//    Chapter 3 → photo3-1.jpg                              (1 photo)
//    Chapter 4 → photo4-1.jpg, photo4-2.jpg, photo4-3.jpg  (3 photos)
//    Chapter 5 → photo5-1.jpg                              (1 photo)
//    Chapter 6 → photo6-1.jpg .. photo6-6.jpg              (6 photos)
//    TOTAL = 13 photos
//
//  MUSIC — replace public/assets/music/music.mp3
// ===================================================================

export const STORY = {
  myName: 'Ankita Tiwari',
  babyName: 'Baby',

  firstMeetingDate: '04/04/2026',
  firstMeetingDisplay: '04 April 2026',

  musicSrc: '/assets/music/music.wav',
};

export interface Chapter {
  id: number;
  title: string;
  date: string;
  photos: string[];
  caption: string;
  note: string;
  navLabel: string;
}

export const CHAPTERS: Chapter[] = [
  {
    id: 1,
    title: 'The Day My Favourite Story Began',
    date: '',
    photos: ['/assets/photos/photo1-1.jpeg'],
    caption:
      'Honestly, when I first saw you, I was like… okay, let’s see what happens! 😂 You weren’t exactly giving me that instant heart-eyes moment, but there was something about you. I decided to give this a chance, without knowing that one day you’d become my favourite person. Little did I know, this was the beginning of my forever.',
    note: 'A small beginning, a huge forever.',
    navLabel: 'Take Me to Our Next Memory',
  },
  {
    id: 2,
    title: 'Seeing You Again 🤍',
    date: '',
    photos: ['/assets/photos/photo2-1.jpeg'],
    caption:
      'And then came the second day. I saw you again, spent a little more time with you, and somehow, you started growing on me. Your way of caring, your affection, and the way you made me feel… I was slowly getting attached. Maybe my heart had already started choosing you, even before I realised it.',
    note: 'I was falling for you before I even knew it.',
    navLabel: "Baby, There's More...",
  },
  {
    id: 3,
    title: 'Something Was Changing ✨',
    date: '',
    photos: ['/assets/photos/photo3-1.jpeg'],
    caption:
      'By the third day, I knew there was something special about you. I was no longer just curious about what would happen next. I was actually looking forward to seeing you. You were becoming someone I wanted to know more, someone I wanted to spend more time with. And look at us now… who knew these three little days would turn into such a beautiful story?',
    note: 'What started small became something unforgettable.',
    navLabel: "Let's Keep Our Story Going",
  },
  {
    id: 4,
    title: 'And Then, We Made Memories…',
    date: '',
    photos: [
      '/assets/photos/photo4-1.jpeg',
      '/assets/photos/photo4-2.jpeg',
      '/assets/photos/photo4-3.jpeg',
    ],
    caption:
      'From random meet-ups to long drives, little dates to beautiful trips, endless conversations to silly fights… we kept collecting moments that slowly became my favourite memories. We travelled, explored, laughed, clicked pictures, and made a little world of our own. And somewhere between all these moments, you stopped being just someone I was dating. You became my person.',
    note: 'Every little memory became a chapter worth keeping.',
    navLabel: 'One More Memory With You',
  },
  {
    id: 5,
    title: 'The Day You Asked Me Forever 💍',
    date: '',
    photos: ['/assets/photos/photo5-1.jpeg'],
    caption:
      'When you proposed to me, I remember thinking just one thing… “Yes. He’s the one.” I didn’t need a hundred reasons or a perfect moment to know that I wanted you. I wanted to choose you, stand beside you, support you, celebrate your happiness, and face every difficult day together. That day, I wasn’t just saying yes to a proposal. I was saying yes to a lifetime with you. And if you ever ask me again, my answer will still be YES.',
    note: 'The easiest yes of my life.',
    navLabel: 'Almost at the Surprise...',
  },
  {
    id: 6,
    title: 'From A Stranger To My Whole World ❤️',
    date: '',
    photos: [
      '/assets/photos/photo6-1.jpeg',
      '/assets/photos/photo6-2.jpeg',
      '/assets/photos/photo6-3.jpeg',
      '/assets/photos/photo6-4.jpeg',
      '/assets/photos/photo6-5.jpeg',
      '/assets/photos/photo6-6.jpeg',
    ],
    caption:
      'Remember how I first met you and thought, “Okay, let’s see what happens”? Well, look at what happened. That one person I was just getting to know has now become my entire world. From being someone I was curious about to becoming someone I cannot imagine my life without. Today, I cannot even picture a future where you aren’t in it. I want you in my little everyday moments, my biggest achievements, my happiest days, and even my difficult ones. I want to grow with you, make mistakes with you, learn with you, travel with you, and build a beautiful life together. I don’t know what every day of our future will look like, but I know one thing — I want you in all of them. I started with “Let’s see what happens.” And now, all I want is for us to happen. Forever. Your girl, always. ❤️',
    note: 'From a small beginning to a forever I never want to live without.',
    navLabel: 'Open Your Surprise',
  },
];

export const FINAL_LETTER = `My Love ❤️

I don’t know how to put everything into words, but I just want you to know how grateful I am to have you in my life.

Thank you for always supporting me, understanding me, standing by my side and making me feel that I’m never alone. Your love, care, patience and little efforts mean more to me than you can imagine.

I know I’m not always easy to handle. Sometimes I get angry, overthink or say things without thinking, but deep down, I love you more than words can explain.

Thank you for being my strength on difficult days, my happiness on good days and my safe place through everything. I love the way you care for me, encourage me and believe in me. I want to grow in life with you, celebrate our little achievements, face challenges together and make beautiful memories.

I may not say it every day, but I notice every little thing you do for me, and I appreciate all of it.

I don’t need a perfect relationship. I just want us to keep choosing each other, understanding each other and growing together.

Thank you for being you. I’m so lucky to have you. I love you so much, my favourite person. ❤️

Always yours. 💗`;
