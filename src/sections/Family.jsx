import HighlightText from '../components/HighlightText'
import RegularText from '../components/RegularText'

function Memeber ({ name, img, description }) {
  return (
    <div className='mx-6 shadow-sm'>
      <div className='border-l-4 border-b-2 border-r border-l-blue-950 rounded-tl-md pb-1'>
        <img src={img} alt={name} className='rounded-sm' />
        <h3 className='text-2xl font-lato-bold mt-1'>{name}</h3>
        <RegularText className='px-1'>{description}</RegularText>
      </div>
    </div>
  )
}

function FamilySection () {
  return (
    <section className='min-h-full pb-36'>
      <HighlightText>Your Funky Little Family</HighlightText>
      <RegularText className='px-6'>This section is dedicated to the family that is waiting 4 you. Come here when you miss us.</RegularText>
      <div id='family-container' className='mt-3 flex flex-col gap-7'>
        <Memeber
          name='Niñito'
          img='/assets/photos/ninito.JPG'
          description='Our furball of mischief and cuddles.'
        />
        <Memeber
          name='Yop'
          img='/assets/photos/me.JPG'
          description='The mastermind behind this web tribute. A dumb, freaky, and grumpy dude.'
        />
      </div>
    </section>
  )
};

export default FamilySection
