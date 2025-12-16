import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button'
import Modal from 'react-bootstrap/Modal'
import { Trans, useTranslation } from 'react-i18next'
import world from '../assets/world.png'
import Image from 'react-bootstrap/Image'
// https://www.iana.org/assignments/language-subtag-registry/language-subtag-registry

const languages = [
  { code: 'en', lang: 'English' },
  {
    code: 'fr',
    lang: 'French',
  },
  { code: 'es', lang: 'Spanish' },
  { code: 'it', lang: 'Italian' },
  { code: 'th', lang: 'Thai' },
]

const NavbarComp = () => {
  const { t, i18n } = useTranslation()
  const [show, setShow] = useState(false)
  const uname = t('User', {
    UserName: 'John Doe',
  })
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  // Language switching
  const handleChange = (code) => {
    i18n.changeLanguage(code)
  }

  // RTL
  useEffect(() => {
    document.body.dir = i18n.dir()
  }, [i18n.language, i18n])

  return (
    <Navbar bg='light' data-bs-theme='light'>
      <Container className='py-2 px-0'>
        <Navbar.Brand href='#home'>Crafts</Navbar.Brand>
        <Nav className='d-flex align-items-center gap-4'>
          <Nav.Link onClick={handleShow}>
            <Image src={world} width={25} />
          </Nav.Link>
          <Trans i18nKey={uname} components={{ 1: <b /> }} />
        </Nav>
        <Modal show={show} onHide={handleClose} className='w-100'>
          <Modal.Header closeButton className='border-0'>
            <Modal.Title>Choose a Language</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {languages.map(({ lang, code }) => (
              <Button
                variant='light'
                className={`w-25 m-2 ${
                  code === i18n.language ? 'bg-dark text-light' : ''
                }`}
                key={code}
                onClick={() => handleChange(code)}
              >
                {lang}
              </Button>
            ))}
          </Modal.Body>
        </Modal>
      </Container>
    </Navbar>
  )
}

export default NavbarComp
