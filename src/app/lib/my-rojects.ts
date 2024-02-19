import elaineCostureiraThumb from '@/app/assets/projects/elaine-costureira-website.png'
import triploASeminovosThumb from '@/app/assets/projects/triploa-seminovos-website.png'
import tailwindNextJsThumb from '@/app/assets/projects/tailwind-nextjs-app.png'
import notesNlwExpertThumb from '@/app/assets/projects/notes-nlw-expert-app.png'

export const myProjects = [
  {
    name: 'Tailwind NextJs',
    description: 'Projeto desenvolvido na Masterclass de TailwindCSS da Rocketseat.',
    githubLink: 'https://github.com/marcelopoars/tailwind-nextjs',
    previewLink: 'https://tailwind-nextjs.marcelopereira.dev',
    stack: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCSS'],
    thumb: tailwindNextJsThumb,
    projectType: 'App'
  },
  {
    name: 'Notes',
    description: 'Esta aplicação foi desenvolvida durante o NLW Expert da Rocketseat - trilha de React.',
    githubLink: 'https://github.com/marcelopoars/nlw-experts-notes',
    previewLink: 'https://notes.marcelopereira.dev',
    stack: ['ReactJs', 'Vite', 'TypeScript', 'TailwindCSS'],
    thumb: notesNlwExpertThumb,
    projectType: 'App'
  },
  {
    name: 'Elaine | Costureira',
    description: 'Landing page desenvolvida para a cliente Elains Costureira de Canoas-RS.',
    githubLink: '',
    previewLink: 'https://www.elainecostureira.com.br',
    stack: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCSS', 'SEO'],
    thumb: elaineCostureiraThumb,
    projectType: 'Website'
  },
  {
    name: 'Triplo A Seminovos',
    description: 'Website desenvolvido para o cliente Triplo A Seminovos - Canoas-RS.',
    githubLink: '',
    previewLink: 'https://triploaseminovos.com.br',
    stack: ['ReactJs', 'GatsbyJs', 'JavaScript', 'Styled-components', 'SEO'],
    thumb: triploASeminovosThumb,
    projectType: 'Website'
  }
]