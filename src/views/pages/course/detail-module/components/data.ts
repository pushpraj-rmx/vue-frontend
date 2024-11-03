import type { CourseMaterialType, DiscussType, NoteType } from '@/views/pages/course/detail-module/components/types';
import { faFileAlt, faFileSignature, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';

import avatar3 from '@/assets/images/avatar/03.jpg';
import avatar5 from '@/assets/images/avatar/05.jpg';
import { addOrSubtractMinutesFromDate } from '@/helpers/date';

export const courseMaterialData: CourseMaterialType[] = [
  {
    date: "April 15 - 20",
    lectures: [
      {
        title: "What is Digital Marketing What is Digital Marketing",
        features: ["15m 10s", "20pts"],
        isSubmitted: true,
      },
      {
        title: "Assignments 1 - Research about marketing",
        icon: faFileSignature,
        features: ["20pts",],
        isSubmitted: true,

      },
      {
        title: "Slide - Digital Marketing",
        icon: faFileAlt,
        features: ["View", "05 Slide"],
        isResume: true,
      },
      {
        title: "Quiz - Digital Marketing",
        icon: faQuestionCircle,
        features: ["12 April", "10 pts"]
      }
    ]
  },
  {
    date: "April 22 - 24",
    lectures: [
      {
        title: "Assignments 2 - Research about customer life cycle",
        icon: faFileSignature,
        features: ["20pts", "Submit"]
      },
      {
        title: "Assignments 3 - SEO Optimization",
        icon: faFileSignature,
        features: ["20pts", "Submit"]
      },
      {
        title: "Slide - Type of Marketing",
        icon: faFileAlt,
        features: ["View", "05 Slide"]
      }
    ]
  },
  {
    date: "April 28 - May 05",
    lectures: [
      {
        title: "Assignments 2 - Research about customer life cycle",
        icon: faFileSignature,
        features: ["20pts", "Submit"]
      },
      {
        title: "Assignments 3 - SEO Optimization",
        icon: faFileSignature,
        features: ["20pts", "Submit"]
      },
      {
        title: "Slide - Type of Marketing",
        icon: faFileAlt,
        features: ["View", "05 Slide"]
      }
    ]
  },
  {
    date: "May 08 - 15",
    lectures: [
      {
        title: "What is Digital Marketing What is Digital Marketing",
        features: ["15m 10s", "20pts", "Submit"]
      },
      {
        title: "Measuring SEO Effectiveness",
        features: ["30m 10s", "20pts", "Submit"]
      },
      {
        title: "Keywords in Blog and Articles",
        features: ["30m 10s", "20pts", "Submit"]
      },
      {
        title: "Slide - Digital Marketing",
        icon: faFileAlt,
        features: ["View", "05 Slide"]
      },
      {
        title: "Quiz - Digital Marketing",
        icon: faQuestionCircle,
        features: ["12 April", "10 pts"]
      }
    ]
  }
];

export const allNotesData: NoteType[] = [
  {
    title: "Introduction (2:34)",
    description: "Departure defective arranging rapturous did believe him all had supported. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how."
  },
  {
    title: "What is Digital Marketing What is Digital Marketing (10:20)",
    description: "Arranging rapturous did believe him all had supported. Supposing so be resolving breakfast am or perfectly. It drew a hill from me. Valley by oh twenty direct me so. Departure defective arranging rapturous did believe him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how."
  },
];

export const discussData: DiscussType[] = [
  {
    title: "How can you categorize Digital marketing?",
    name: "Samuel Bishop",
    comment: "As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.",
    image: avatar3,
    createdAt: addOrSubtractMinutesFromDate(8),
  },
  {
    title: "What are the key areas where you can use keywords to optimize your site ranking?",
    name: "Carolyn Ortiz",
    comment: "As it so contrasted oh estimating instrument. Size like body someone had. Are conduct viewing boy minutes warrant the expense? Tolerably behavior may admit daughters offending her ask own. Praise effect wishes change way and any wanted. Lively use looked latter regard had. Do he it part more last in.",
    image: avatar5,
    createdAt: addOrSubtractMinutesFromDate(50),
  },
];