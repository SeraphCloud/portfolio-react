import { FotoPerfil } from "./styles"

const USER = 'SeraphCloud'

const Avatar = () => {
  return(
    <FotoPerfil src={`https://github.com/${USER}.png`} alt="avatar-icon" />
  )
}

export default Avatar
