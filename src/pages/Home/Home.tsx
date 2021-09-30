import Cyberpunk from 'assets/images/background.png'

import Logo03 from 'assets/images/logo-03.jpeg'

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <div style={{ width: '50%', height: '40%' }}>
        <img src={Logo03} alt="logo" width="100%" height="100%" />
      </div>

      <img src={Cyberpunk} alt="logo" />
    </div>
  )
}
