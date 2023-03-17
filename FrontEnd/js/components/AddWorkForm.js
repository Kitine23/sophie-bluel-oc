import { getCategories, createWork } from '../utils/api.js'
import {
  div,
  form,
  h2,
  hr,
  input,
  img,
  p,
  label,
  select,
  option,
} from '../utils/HTMLElement.js'

export async function AddWorkForm() {
  const categories = await getCategories()

  const options = categories.map((category) => {
    return option({ value: category.id }, category.name)
  })

  // https://stackoverflow.com/a/66472691
  const handleFormChange = (e) => {
    const fields = Array.from(
      e.currentTarget.querySelectorAll('input:invalid,select:invalid')
    )
    const submit = e.currentTarget.querySelector('input[type="submit"]')

    fields.length > 0
      ? submit.setAttribute('disabled', 'disabled')
      : submit.removeAttribute('disabled')
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const createdWork = await createWork(new FormData(e.currentTarget))

    const pEl = e.target.querySelector('.form-result')

    if (createdWork?.error) {
      pEl.textContent = 'Une erreur est survenue, impossible de créer le projet'
      pEl.style.color = '#d65353'
    } else {
      pEl.textContent = 'Le projet a bien été envoyé'
      pEl.style.color = '#1d6154'
    }
    pEl.style.display = 'block'
  }

  return form(
    {
      onsubmit: handleFormSubmit,
      onchange: handleFormChange,
    },
    h2({ id: 'modal-title' }, 'Ajout photo'),
    div(
      { className: 'work-picture' },
      img({
        src: 'assets/icons/countryside.svg',
        alt: 'countryside-icon',
        width: '58',
        height: '46',
      }),
      input({
        type: 'file',
        name: 'image',
        accept: 'image/png, image/jpeg',
        required: true,
      }),
      p({}, 'jpg, png : 4mo max')
    ),
    div(
      { className: 'work-infos' },
      label({}, 'Titre'),
      input({
        type: 'text',
        name: 'title',
        required: true,
      }),
      label({}, 'Catégorie'),
      select(
        {
          name: 'category',
          required: true,
        },
        option({ value: 0 }),
        ...options
      )
    ),
    p({ className: 'form-result' }),
    hr({ className: 'line' }),
    input({
      className: 'btn-submit',
      type: 'submit',
      value: 'Valider',
      disabled: true,
    })
  )
}
