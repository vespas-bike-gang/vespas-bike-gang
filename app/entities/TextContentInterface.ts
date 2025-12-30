export interface TextContentInterface {
  nodeType: string
  data: {}
  content: TextContentContentInterface[]
}

interface TextContentContentInterface {
  nodeType: string
  data: {}
  content: TextContentContentContentInterface[]
}

interface TextContentContentContentInterface {
  nodeType: string
  data: {}
  value: string
}