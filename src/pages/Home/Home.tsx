import Cyberpunk from 'assets/images/background.png'

export const Home = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        background: '#FCD594',
        width: '100%',
      }}
    >
      <img src={Cyberpunk} alt="logo" />
    </div>
  )
}
