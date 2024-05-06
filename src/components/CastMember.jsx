import React from 'react'

import person from '../assets/person.png'
import { buildImageURL } from "../helpers/api"

const CastMember = ({ cast }) => {

    const imagePath = cast.profile_path ? buildImageURL(cast.profile_path) : person

  return (
    <li className="text-base flex flex-col items-start shrink-0">
        <div className="w-32 rounded overflow-hidden mb-2">
            <img src={imagePath} alt={cast.name} className="object-cover object-center" />
        </div>
        <span className="text-sm text-center">
            {cast.name}
        </span>
    </li>
  )
}

export default CastMember
