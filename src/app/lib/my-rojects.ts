import elaineCostureiraThumb from '@/app/assets/projects/elaine-costureira-website.png'
import triploASeminovosThumb from '@/app/assets/projects/triploa-seminovos-website.png'
import tailwindNextJsThumb from '@/app/assets/projects/tailwind-nextjs-app.png'
import notesNlwExpertThumb from '@/app/assets/projects/notes-nlw-expert-app.png'

export const myProjects = [
  {
    name: 'Tailwind NextJs',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus exercitationem ipsa cumque iusto cum in ffooo bar foo foo?',
    githubLink: 'https://github.com/marcelopoars/tailwind-nextjs',
    previewLink: 'https://tailwind-nextjs.marcelopereira.dev',
    stack: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCSS'],
    thumb: tailwindNextJsThumb,
    projectType: 'App'
  },
  {
    name: 'Notes',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ducimus exercitationem ipsa cumque iusto cum in?',
    githubLink: 'https://github.com/marcelopoars/nlw-experts-notes',
    previewLink: 'https://notes.marcelopereira.dev',
    stack: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCSS'],
    thumb: notesNlwExpertThumb,
    projectType: 'App'
  },
  {
    name: 'Elaine | Costureira',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    githubLink: 'https://github.com/marcelopoars/elaine-costureira-website',
    previewLink: 'https://www.elainecostureira.com.br',
    stack: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCSS'],
    thumb: elaineCostureiraThumb,
    projectType: 'Website'
  },
  {
    name: 'Triplo A Seminovos',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    githubLink: '',
    previewLink: 'https://triploaseminovos.com.br',
    stack: ['ReactJs', 'GatsbyJs', 'JavaScript', 'Styled-components'],
    thumb: triploASeminovosThumb,
    projectType: 'Website'
  }
]