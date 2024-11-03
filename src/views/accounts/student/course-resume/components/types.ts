type NotesType = {
  timestamp: string
  noteContent: string
}

type LectureType = {
  lectureTitle: string
  duration: string
  notes?: NotesType[]
  locked?: boolean
  isCollapsed?: boolean
}

type CurriculumType = {
  sectionTitle: string
  lecturesCount: number
  completed: number
  progress: number
  lectures: LectureType[]
}

export type CourseDetailType = {
  courseTitle: string
  image: string
  duration: string
  lectures: number
  level: string
  curriculum: CurriculumType[]
}