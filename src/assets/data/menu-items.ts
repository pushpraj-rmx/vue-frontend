import type { MenuItemType } from '@/helpers/menu';
import { BIconGridFill, BIconBasketFill, BIconFileEarmarkPlusFill, BIconFileCheckFill, BIconQuestionDiamond, BIconCartCheckFill, BIconStarFill, BIconCardChecklist, BIconCreditCard2FrontFill, BIconHouse, BIconBasket, BIconUiChecksGrid, BIconGraphUp, BIconPeople, BIconFolderCheck, BIconStar, BIconPencilSquare, BIconWallet2, BIconGear, BIconTrash, BIconCreditCard2Front, BIconCartCheck, BIconJournals, BIconSpeedometer2, BIconWallet, BIconMortarboardFill, BIconFileEarmarkText, BIconPersonFillGear, BIconGearFill, BIconTrashFill, BIconPersonFill, BIconBoxArrowRight } from 'bootstrap-icons-vue';
import { faUserGraduate, faUserCog, faUserTie, faLock, faHouse, faBasketShopping } from '@fortawesome/free-solid-svg-icons';
import { faCommentDots, faChartBar } from '@fortawesome/free-regular-svg-icons';

export const APP_MENU_ITEMS: MenuItemType[] = [
  {
    key: 'demos',
    label: 'Demos',
    icon: BIconHouse,
    children: [
      {
        key: 'demo-default',
        label: 'Home Default',
        route: { name: 'demos.default' },
        parentKey: 'demos'
      },
      {
        key: 'demo-education',
        label: 'Home Education',
        route: { name: 'demos.education' },
        parentKey: 'demos'
      },
      {
        key: 'demo-academy',
        label: 'Home Academy',
        route: { name: 'demos.academy' },
        parentKey: 'demos'
      },
      {
        key: 'demo-course',
        label: 'Home Course',
        route: { name: 'demos.course' },
        parentKey: 'demos'
      },
      {
        key: 'demo-university',
        label: 'Home University',
        route: { name: 'demos.university' },
        parentKey: 'demos'
      },
      {
        key: 'demo-kindergarten',
        label: 'Home Kindergarten',
        route: { name: 'demos.kindergarten' },
        parentKey: 'demos'
      },
      {
        key: 'demo-landing',
        label: 'Home Landing',
        route: { name: 'demos.landing' },
        parentKey: 'demos'
      },
      {
        key: 'demo-tutor',
        label: 'Home Tutor',
        route: { name: 'demos.tutor' },
        parentKey: 'demos'
      },
      {
        key: 'demo-school',
        label: 'Home School',
        route: { name: 'demos.school' },
        parentKey: 'demos'
      },
      {
        key: 'demo-abroad',
        label: 'Home Abroad',
        route: { name: 'demos.abroad' },
        parentKey: 'demos'
      },
      {
        key: 'demo-workshop',
        label: 'Home Workshop',
        route: { name: 'demos.workshop' },
        parentKey: 'demos'
      }
    ]
  },
  {
    key: 'pages',
    label: 'Pages',
    icon: BIconJournals,
    children: [
      {
        key: 'pages-course',
        label: 'Course',
        parentKey: 'pages',
        children: [
          {
            key: 'course-categories',
            label: 'Course Categories',
            route: { name: 'course.categories' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-grid-classic',
            label: 'Course Grid Classic',
            route: { name: 'course.grid.classic' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-grid-minimal',
            label: 'Course Grid Minimal',
            route: { name: 'course.grid.minimal' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-list-classic',
            label: 'Course List Classic',
            route: { name: 'course.list.classic' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-list-minimal',
            label: 'Course List Minimal',
            route: { name: 'course.list.minimal' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-detail',
            label: 'Course Detail Classic',
            route: { name: 'course.detail' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-detail-minimal',
            label: 'Course Detail Minimal',
            route: { name: 'course.detail.minimal' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-detail-advance',
            label: 'Course Detail Advance',
            route: { name: 'course.detail.advance' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-detail-module',
            label: 'Course Detail Module',
            route: { name: 'course.detail.module' },
            parentKey: 'pages-course'
          },
          {
            key: 'course-video-player',
            label: 'Course Full Screen Video',
            route: { name: 'course.video.player' },
            parentKey: 'pages-course'
          }
        ]
      },
      {
        key: 'pages-about',
        label: 'About',
        parentKey: 'pages',
        children: [
          {
            key: 'about-about',
            label: 'About Us',
            route: { name: 'about' },
            parentKey: 'pages-saas'
          },
          {
            key: 'about-contact-us',
            label: 'Contact Us',
            route: { name: 'about.contact.us' },
            parentKey: 'pages-saas'
          },
          {
            key: 'about-blog-grid',
            label: 'Blog Grid',
            route: { name: 'about.blog.grid' },
            parentKey: 'pages-saas'
          },
          {
            key: 'about-blog-masonry',
            label: 'Blog Masonry',
            route: { name: 'about.blog.masonry' },
            parentKey: 'pages-saas'
          },
          {
            key: 'about-blog-detail',
            label: 'Blog Detail',
            route: { name: 'about.blog.detail' },
            parentKey: 'pages-saas'
          },
          {
            key: 'about-pricing',
            label: 'Pricing',
            route: { name: 'about.pricing' },
            parentKey: 'pages-saas'
          },
        ]
      },
      {
        key: 'pages-hero',
        label: 'Hero Banner',
        parentKey: 'pages',
        children: [
          {
            key: 'hero-form',
            label: 'Hero Form',
            route: { name: 'hero.form' },
            parentKey: 'pages-hero'
          },
          {
            key: 'hero-vector',
            label: 'Hero Vector',
            route: { name: 'hero.vector' },
            parentKey: 'pages-hero'
          },
          {
            key: 'hero-coming-soon',
            label: 'Coming soon....',
            route: { name: '' },
            parentKey: 'pages-hero'
          }
        ]
      },
      {
        key: 'pages-instructor.list',
        label: 'Instructor List',
        route: { name: 'instructor.list' },
        parentKey: 'pages'
      },
      {
        key: 'pages-instructor.details',
        label: 'Instructor Single',
        route: { name: 'instructor.single', params: { id: '1001' } },
        parentKey: 'pages'
      },
      {
        key: 'pages-become.instructor',
        label: 'Become an Instructor',
        route: { name: 'become.instructor' },
        parentKey: 'pages'
      },
      {
        key: 'pages-abroad.single',
        label: 'Abroad Single',
        route: { name: 'abroad.single' },
        parentKey: 'pages'
      },
      {
        key: 'pages-workshop.detail',
        label: 'Workshop Detail',
        route: { name: 'workshop.detail' },
        parentKey: 'pages'
      },
      {
        key: 'pages-event.detail',
        label: 'Event Detail',
        route: { name: 'event.detail' },
        parentKey: 'pages'
      },
      {
        key: 'pages-shop',
        label: 'Shop',
        parentKey: 'pages',
        children: [
          {
            key: 'shop-grid',
            label: 'Shop grid',
            route: { name: 'shop.grid' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-single',
            label: 'Product detail',
            route: { name: 'shop.product.detail', params: { id: '1001' } },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-cart',
            label: 'Cart',
            route: { name: 'shop.cart' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-empty-cart',
            label: 'Checkout',
            route: { name: 'shop.checkout' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-checkout',
            label: 'Empty Cart',
            route: { name: 'shop.empty-cart' },
            parentKey: 'pages-shop'
          },
          {
            key: 'shop-checkout',
            label: 'Wishlist',
            route: { name: 'shop.wishlist' },
            parentKey: 'pages-shop'
          }
        ]
      },
      {
        key: 'pages-help',
        label: 'Help',
        parentKey: 'pages',
        children: [
          {
            key: 'help-center',
            label: 'Help Center',
            route: { name: 'help.center' },
            parentKey: 'pages-help'
          },
          {
            key: 'help-center-single',
            label: 'Help Center Single',
            route: { name: 'help.center.single', params: { id: '3001' } },
            parentKey: 'pages-help'
          },
          {
            key: 'help-faq',
            label: 'FAQs',
            route: { name: 'help.faq' },
            parentKey: 'pages-help'
          }
        ]
      },
      {
        key: 'pages-auth',
        label: 'Authentication',
        parentKey: 'pages',
        children: [
          {
            key: 'auth-sign-in',
            label: 'Sign In',
            route: { name: 'auth.sign-in' },
            parentKey: 'pages-auth'
          },
          {
            key: 'auth-sign-up',
            label: 'Sign Up',
            route: { name: 'auth.sign-up' },
            parentKey: 'pages-auth'
          },
          {
            key: 'auth-forgot-password',
            label: 'Forgot Password',
            route: { name: 'auth.forgot-password' },
            parentKey: 'pages-auth'
          }
        ]
      },
      {
        key: 'pages-form',
        label: 'Form',
        parentKey: 'pages',
        children: [
          {
            key: 'form-request-demo',
            label: 'Request a demo',
            route: { name: 'form.request.demo' },
            parentKey: 'pages-form'
          },
          {
            key: 'form-book-class',
            label: 'Book a Class',
            route: { name: 'form.book.class' },
            parentKey: 'pages-form'
          },
          {
            key: 'form-request-access',
            label: 'Free Access',
            route: { name: 'form.request.access' },
            parentKey: 'pages-form'
          },
          {
            key: 'form-admission-form',
            label: 'Admission Form',
            route: { name: 'form.admission.form' },
            parentKey: 'pages-form'
          }
        ]
      },
      {
        key: 'pages-specialty',
        label: 'Specialty',
        parentKey: 'pages',
        children: [
          {
            key: 'specialty-error-404',
            label: 'Error 404',
            route: { name: 'specialty.error-404' },
            parentKey: 'pages-specialty'
          },
          {
            key: 'specialty-coming-soon',
            label: 'Coming Soon',
            route: { name: 'specialty.coming.soon' },
            parentKey: 'pages-specialty'
          }
        ]
      }
    ]
  },
  {
    key: 'accounts',
    label: 'Accounts',
    icon: BIconSpeedometer2,
    children: [
      {
        key: 'accounts-instructor',
        label: 'Instructor',
        parentKey: 'accounts',
        icon: BIconPersonFill,
        children: [
          {
            key: 'instructor.dashboard',
            label: 'Dashboard',
            route: { name: 'instructor.dashboard' },
            parentKey: 'accounts-instructor',
            icon: BIconGridFill
          },
          {
            key: 'instructor.course',
            label: 'Courses',
            route: { name: 'instructor.course' },
            parentKey: 'accounts-instructor',
            icon: BIconBasketFill
          },
          {
            key: 'instructor.create-course',
            label: 'Create Course',
            route: { name: 'instructor.create.course' },
            parentKey: 'accounts-instructor',
            icon: BIconFileEarmarkPlusFill
          },
          {
            key: 'instructor.course-added',
            label: 'Course Added',
            route: { name: 'instructor.course.added' },
            parentKey: 'accounts-instructor',
            icon: BIconFileCheckFill
          },
          {
            key: 'instructor.quiz',
            label: 'Quiz',
            route: { name: 'instructor.quiz' },
            parentKey: 'accounts-instructor',
            icon: BIconQuestionDiamond
          },
          {
            key: 'instructor.earning',
            label: 'Earnings',
            route: { name: 'instructor.earning' },
            parentKey: 'accounts-instructor',
            icon: BIconGraphUp
          },
          {
            key: 'instructor.student',
            label: 'Students',
            route: { name: 'instructor.student' },
            parentKey: 'accounts-instructor',
            icon: BIconMortarboardFill
          },
          {
            key: 'instructor.order',
            label: 'Orders',
            route: { name: 'instructor.order' },
            parentKey: 'accounts-instructor',
            icon: BIconCartCheckFill
          },
          {
            key: 'instructor.review',
            label: 'Reviews',
            route: { name: 'instructor.review' },
            parentKey: 'accounts-instructor',
            icon: BIconStarFill
          },
          {
            key: 'instructor.payout',
            label: 'Payout',
            route: { name: 'instructor.payout' },
            parentKey: 'accounts-instructor',
            icon: BIconWallet
          },
        ]
      },
      {
        key: 'accounts-student',
        label: 'Student',
        parentKey: 'accounts',
        icon: BIconMortarboardFill,
        children: [
          {
            key: 'student-dashboard',
            label: 'Dashboard',
            route: { name: 'student.dashboard' },
            parentKey: 'accounts-student',
            icon: BIconGridFill
          },
          {
            key: 'student-subscription',
            label: 'My Subscriptions',
            route: { name: 'student.subscription' },
            parentKey: 'accounts-student',
            icon: BIconCardChecklist
          },
          {
            key: 'student-course',
            label: 'Courses',
            route: { name: 'student.course' },
            parentKey: 'accounts-student',
            icon: BIconBasketFill
          },
          {
            key: 'student-student.resume',
            label: 'Course Resume',
            route: { name: 'student.course.resume' },
            parentKey: 'accounts-student',
            icon: BIconFileEarmarkText
          },
          {
            key: 'student-quiz',
            label: 'Quiz',
            route: { name: 'student.quiz' },
            parentKey: 'accounts-student',
            icon: BIconQuestionDiamond
          },
          {
            key: 'student-payment',
            label: 'Payment Info',
            route: { name: 'student.payment' },
            parentKey: 'accounts-student',
            icon: BIconCreditCard2FrontFill
          },
          {
            key: 'student-bookmark',
            label: 'Wishlist',
            route: { name: 'student.bookmark' },
            parentKey: 'accounts-student',
            icon: BIconCartCheckFill
          },
        ]
      },
      {
        key: 'admin-dashboard',
        label: 'Admin',
        route: { name: 'admin.dashboard' },
        parentKey: 'accounts',
        icon: BIconPersonFillGear
      },
      {
        key: 'instructor-edit-profile',
        label: 'Edit Profile',
        route: { name: 'instructor.edit.profile' },
        parentKey: 'accounts',
        icon: BIconPencilSquare
      },
      {
        key: 'instructor-settings',
        label: 'Settings',
        route: { name: 'instructor.settings' },
        parentKey: 'accounts',
        icon: BIconGearFill
      },
      {
        key: 'instructor-delete-account',
        label: 'Delete Profile',
        route: { name: 'instructor.delete.account' },
        parentKey: 'accounts',
        icon: BIconTrashFill
      },
      {
        key: 'accounts-dropdown-levels',
        label: 'Dropdown levels',
        parentKey: 'accounts',
        children: [
          {
            key: 'dropdown-end',
            label: 'Dropdown',
            route: { name: '' },
            parentKey: 'accounts-dropdown-levels',
            children: [
              {
                key: 'dropdown-item-end',
                label: 'Dropdown Item',
                route: { name: '' },
                parentKey: 'dropdown-end'
              },
              {
                key: 'dropdown-item-end1',
                label: 'Dropdown Item',
                route: { name: '' },
                parentKey: 'dropdown-end'
              }
            ]
          },
          {
            key: 'dropdown-end-item',
            label: 'Dropdown item',
            route: { name: '' },
            parentKey: 'accounts-dropdown-levels'
          }
        ]
      }
    ]
  }
];

export const ADMIN_MENU_ITEMS: MenuItemType[] = [
  {
    key: "dashboards",
    icon: faHouse,
    label: "Dashboard",
    route: { name: "admin.dashboard" },
  },
  {
    key: "pages",
    label: "Pages",
    isTitle: true,
  },
  {
    key: "courses",
    icon: faBasketShopping,
    label: "Courses",
    children: [
      {
        key: "course-all",
        label: "All Courses",
        route: { name: "admin.course-list" },
        parentKey: "courses",
      },
      {
        key: "course-category",
        label: "Course Category",
        route: { name: "admin.course.category" },
        parentKey: "courses",
      },
      {
        key: "course-detail",
        label: "Course Detail",
        route: { name: "admin.course.detail" },
        parentKey: "courses",
      },
    ],
  },
  {
    key: "students",
    icon: faUserGraduate,
    label: "Students",
    route: { name: "admin.student.list" },
  },
  {
    key: "instructors",
    icon: faUserTie,
    label: "Instructors",
    children: [
      {
        key: "course-all",
        label: "Instructors",
        route: { name: "admin.instructor.list" },
        parentKey: "instructors",
      },
      {
        key: "course-category",
        label: "Instructor Detail",
        route: { name: "admin.instructor.detail" },
        parentKey: "instructors",
      },
      {
        key: "course-detail",
        label: "Instructor requests",
        route: { name: "admin.instructor.request" },
        parentKey: "instructors",
        badge: '2'
      },
    ],
  },
  {
    key: "reviews",
    icon: faCommentDots,
    label: "Reviews",
    route: { name: "admin.review" },
  },
  {
    key: "earnings",
    icon: faChartBar,
    label: "Earnings",
    route: { name: "admin.earning" },
  },
  {
    key: "settings",
    icon: faUserCog,
    label: "Admin Settings",
    route: { name: "admin.setting" },
  },
  {
    key: "auth",
    icon: faLock,
    label: "Authentication",
    children: [
      {
        key: "auth-sign-up",
        label: "Sign Up",
        route: { name: "auth.sign-up" },
        parentKey: "auth",
      },
      {
        key: "auth-sign-in",
        label: "Sign In",
        route: { name: "auth.sign-in" },
        parentKey: "auth",
      },
      {
        key: "auth-forgot-password",
        label: "Forgot Password",
        route: { name: "auth.forgot-password" },
        parentKey: "auth",
      },
      {
        key: "auth-error-404",
        label: "Error 404",
        route: { name: "admin.error-404" },
        parentKey: "auth",
      },
    ],
  }
];

export const INSTRUCTOR_MENU_ITEMS = [
  {
    title: 'Dashboard',
    route: { name: 'instructor.dashboard' },
    icon: BIconUiChecksGrid
  },
  {
    title: 'My Courses',
    route: { name: 'instructor.course' },
    icon: BIconBasket
  },
  {
    title: 'Quiz',
    route: { name: 'instructor.quiz' },
    icon: BIconQuestionDiamond
  },
  {
    title: 'Earnings',
    route: { name: 'instructor.earning' },
    icon: BIconGraphUp
  },
  {
    title: 'Students',
    route: { name: 'instructor.student' },
    icon: BIconPeople
  },
  {
    title: 'Orders',
    route: { name: 'instructor.order' },
    icon: BIconFolderCheck
  },
  {
    title: 'Reviews',
    route: { name: 'instructor.review' },
    icon: BIconStar
  },
  {
    title: 'Edit Profile',
    route: { name: 'instructor.edit.profile' },
    icon: BIconPencilSquare
  },
  {
    title: 'Payouts',
    route: { name: 'instructor.payout' },
    icon: BIconWallet2
  },
  {
    title: 'Settings',
    route: { name: 'instructor.settings' },
    icon: BIconGear
  },
  {
    title: 'Delete Profile',
    route: { name: 'instructor.delete.account' },
    icon: BIconTrash
  },
  {
    title: 'Sign Out',
    route: { name: 'auth.sign-in' },
    icon: BIconBoxArrowRight
  },
];

export const STUDENT_MENU_ITEMS = [
  {
    title: 'Dashboard',
    route: { name: 'student.dashboard' },
    icon: BIconUiChecksGrid
  },
  {
    title: 'My Subscriptions',
    route: { name: 'student.subscription' },
    icon: BIconCardChecklist
  },
  {
    title: 'My Courses',
    route: { name: 'student.course' },
    icon: BIconBasket
  },
  {
    title: 'Course Resume',
    route: { name: 'student.course.resume' },
    icon: BIconFileEarmarkText
  },
  {
    title: 'Quiz',
    route: { name: 'student.quiz' },
    icon: BIconQuestionDiamond
  },
  {
    title: 'Payment Info',
    route: { name: 'student.payment' },
    icon: BIconCreditCard2Front
  },
  {
    title: 'Wishlist',
    route: { name: 'student.bookmark' },
    icon: BIconCartCheck
  },
  {
    title: 'Edit Profile',
    route: { name: 'instructor.edit.profile' },
    icon: BIconPencilSquare
  },
  {
    title: 'Settings',
    route: { name: 'instructor.settings' },
    icon: BIconGear
  },
  {
    title: 'Delete Profile',
    route: { name: 'instructor.delete.account' },
    icon: BIconTrash
  },
  {
    title: 'Sign Out',
    route: { name: 'auth.sign-in' },
    icon: BIconBoxArrowRight
  }
];

export const CATEGORY_MENU_ITEMS = [
  {
    key: 'development',
    label: 'Development',
    children: [
      {
        key: 'web-development',
        label: 'Web Development',
        parentKey: 'development',
        children: [
          {
            key: 'development-css',
            label: 'CSS',
            route: { name: '' },
            parentKey: 'web-development'
          },
          {
            key: 'development-javaScript',
            label: 'JavaScript',
            route: { name: '' },
            parentKey: 'web-development'
          },
          {
            key: 'development-angular',
            label: 'Angular',
            route: { name: '' },
            parentKey: 'web-development'
          },
          {
            key: 'development-php',
            label: 'PHP',
            route: { name: '' },
            parentKey: 'web-development'
          },
          {
            key: 'development-html',
            label: 'HTML',
            route: { name: '' },
            parentKey: 'web-development'
          },
          {
            key: 'development-react',
            label: 'React',
            route: { name: '' },
            parentKey: 'web-development'
          }
        ]
      },
      {
        key: 'data-science',
        label: 'Data Science',
        route: { name: '' },
        parentKey: 'development',
      },
      {
        key: 'mobile-dvelopment',
        label: 'Mobile Development',
        route: { name: '' },
        parentKey: 'development',
      },
      {
        key: 'programming-language',
        label: 'Programming Language',
        route: { name: '' },
        parentKey: 'development',
      },
      {
        key: 'software-testing',
        label: 'Software Testing',
        route: { name: '' },
        parentKey: 'development',
      },
      {
        key: 'software-engineering',
        label: 'Software Engineering',
        route: { name: '' },
        parentKey: 'development',
      },
      {
        key: 'software-development-tools',
        label: 'Software Development Tools',
        route: { name: '' },
        parentKey: 'development',
      },
    ]
  },
  {
    key: 'design',
    route: { name: '' },
    label: 'Design'
  },
  {
    key: 'marketing',
    route: { name: '' },
    label: 'Marketing'
  },
  {
    key: 'music',
    route: { name: '' },
    label: 'Music'
  },
  {
    key: 'lifestyle',
    route: { name: '' },
    label: 'Lifestyle'
  },
  {
    key: 'it-software',
    route: { name: '' },
    label: 'IT & software'
  },
  {
    key: 'personal-development',
    route: { name: '' },
    label: 'Personal development'
  },
  {
    key: 'health-fitness',
    route: { name: '' },
    label: 'Health & fitness'
  },
  {
    key: 'teaching',
    route: { name: '' },
    label: 'Teaching'
  },
  {
    key: 'social-science',
    route: { name: '' },
    label: 'Social science'
  },
  {
    key: 'math-logic',
    route: { name: '' },
    label: 'Math & logic'
  }
];
