import { getCategories, createWork } from '../../utils/api.js'
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
} from '../../utils/HTMLElement.js'
import { WorksGallery } from '../works/WorksGallery.js'

export async function ModalAddPhoto() {
  const modalBodyElt = document.querySelector('#modal-works .modal-body')
  const btnGoBackElt = document.querySelector('#btn-go-back')
  btnGoBackElt.style.display = 'block'

  const imgPreviewElt = img({
    className: 'uploaded-picture',
  })
  imgPreviewElt.style.display = 'none'

  // créer les options du select des catégories à partir de l'API
  const categories = await getCategories()
  const options = categories.map((category) => {
    return option({ value: category.id }, category.name)
  })

  // https://stackoverflow.com/a/66472691
  const handleFormChange = (e) => {
    // validation du formulaire
    const invalidFields = e.currentTarget.querySelectorAll(
      'input:invalid,select:invalid'
    )
    const submit = e.currentTarget.querySelector('input[type="submit"]')

    // désactiver le submit si au moins un champ du formulaire est invalide
    invalidFields.length > 0
      ? submit.setAttribute('disabled', 'disabled')
      : submit.removeAttribute('disabled')

    // affichage de l'image uploadée
    // https://stackoverflow.com/a/4459419
    if (e.target.name === 'image' && e.target.files) {
      const [file] = e.target.files
      if (file) {
        imgPreviewElt.style.display = 'block'
        // convertir l'objet File en URL pour l'image
        imgPreviewElt.src = URL.createObjectURL(file)
      }
    }
  }

  const handleFormSubmit = async (e) => {
    // empêche le formulaire de recharger la page
    e.preventDefault()

    const result = await createWork(new FormData(e.currentTarget))

    const pEl = e.target.querySelector('.form-result')

    if (!result || result?.error) {
      pEl.textContent = 'Une erreur est survenue, impossible de créer le projet'
      pEl.style.color = '#d65353'
    } else {
      pEl.textContent = 'Le projet a bien été envoyé'
      pEl.style.color = '#1d6154'
      // recharge les projets dynamiquement sur la page principale
      WorksGallery()
    }
    pEl.style.display = 'block'
  }

  // création des éléments du formulaire
  const formElt = form(
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

  modalBodyElt.replaceChildren(formElt)
}
