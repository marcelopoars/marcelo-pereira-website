import elaineCostureiraThumb from '@/app/assets/projects/elaine-costureira-website.png'
import triploASeminovosThumb from '@/app/assets/projects/triploa-seminovos-website.png'
import tailwindNextJsThumb from '@/app/assets/projects/tailwind-nextjs-app.png'
import notesNlwExpertThumb from '@/app/assets/projects/notes-nlw-expert-app.png'

export const myProjects = [
  {
    name: 'Tailwind NextJs',
    description: 'Projeto de estudo desenvolvido com NextJs e TailwindCSS.',
    githubLink: 'https://github.com/marcelopoars/tailwind-nextjs',
    previewLink: 'https://tailwind-nextjs.marcelopereira.dev',
    stack: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCSS'],
    thumb: tailwindNextJsThumb,
    projectType: 'App'
  },
  {
    name: 'Notes',
    description: 'Aplicação front-end em ReactJS que permite o usuário salvar notas/lmbretes. As notas podem ser criadas tanto escritas como gravadas por voz.',
    githubLink: 'https://github.com/marcelopoars/nlw-experts-notes',
    previewLink: 'https://notes.marcelopereira.dev',
    stack: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCSS'],
    thumb: notesNlwExpertThumb,
    projectType: 'App'
  },
  {
    name: 'Elaine | Costureira',
    description: 'Landing page para divulgar os serviços de costura da Elaine.',
    githubLink: '',
    previewLink: 'https://www.elainecostureira.com.br',
    stack: ['ReactJs', 'NextJs', 'TypeScript', 'TailwindCSS', 'SEO'],
    thumb: elaineCostureiraThumb,
    projectType: 'Website'
  },
  {
    name: 'Triplo A Seminovos',
    description: 'Website desenvolvido para o cliente Triplo A Seminovos, revendedora de veículos de Canoas-RS.',
    githubLink: '',
    previewLink: 'https://triploaseminovos.com.br',
    stack: ['ReactJs', 'GatsbyJs', 'JavaScript', 'Styled-components', 'SEO'],
    thumb: triploASeminovosThumb,
    projectType: 'Website'
  }
]