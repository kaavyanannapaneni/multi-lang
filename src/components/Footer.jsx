import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()
  return (
    <Navbar expand='lg' className='bg-body-tertiary vw-100'>
      <p className='mx-auto '>{t('builtWith')} 🌿</p>
    </Navbar>
  )
}

export default Footer
