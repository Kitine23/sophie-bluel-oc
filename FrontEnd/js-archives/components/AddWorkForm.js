import { getCategories, createWork, getWorks } from '../utils/api.js'
import { createAllWorks } from '../utils/dom.js'
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
  const imgPreviewElt = img({
    className: 'uploaded-picture',
  })
  imgPreviewElt.style.display = 'none'

  const categories = await getCategories()

  const options = categories.map((category) => {
    return option({ value: category.id }, category.name)
  })

  // https://stackoverflow.com/a/66472691
  const handleFormChange = (e) => {
    // validation du formulaire
    const fields = Array.from(
      e.currentTarget.querySelectorAll('input:invalid,select:invalid')
    )
    const submit = e.currentTarget.querySelector('input[type="submit"]')

    fields.length > 0
      ? submit.setAttribute('disabled', 'disabled')
      : submit.removeAttribute('disabled')

    // affichage de l'image uploadée
    // https://stackoverflow.com/a/4459419
    if (e.target.name === 'image' && e.target.files) {
      const [file] = e.target.files
      if (file) {
        imgPreviewElt.style.display = 'block'
        imgPreviewElt.src = URL.createObjectURL(file)
      }
    }
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const createdWork = await createWork(new FormData(e.currentTarget))

    const pEl = e.target.querySelector('.form-result')

    if (!createdWork || createdWork?.error) {
      pEl.textContent = 'Une erreur est survenue, impossible de créer le projet'
      pEl.style.color = '#d65353'
    } else {
      pEl.textContent = 'Le projet a bien été envoyé'
      pEl.style.color = '#1d6154'
      // recharge les projets dynamiquement sur la page principale
      const works = await getWorks()
      createAllWorks(works)
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
      //https://stackoverflow.com/a/25825731
      label(
        {
          htmlFor: 'file-upload',
        },
        '+ Ajouter photo'
      ),
      input({
        id: 'file-upload',
        type: 'file',
        name: 'image',
        accept: 'image/png, image/jpeg',
        required: true,
      }),
      p({}, 'jpg, png : 4mo max'),
      imgPreviewElt
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
