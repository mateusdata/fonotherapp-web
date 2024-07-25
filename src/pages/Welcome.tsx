import React from 'react'
import HeaderPublic from '../components/HeaderPublic'
import PlansGlobal from '../components/PlansGlobal'
import ApresentationDoctor from '../components/ApresentationDoctor'
import FrequentlyQuestions from '../components/FrequentlyQuestions'
import Footer from '../components/Footer'
import CardsInformationsPlan from '../components/CardsInformationsPlan'
import ApresentationManagers from '../components/ApresentationManagers'
import PublicLayout from '../templates/PublicLayout'

export default function Welcome() {
  return (
    <PublicLayout>
      <HeaderPublic />
      <PlansGlobal />
      <CardsInformationsPlan/>
      <ApresentationManagers/>
      <ApresentationDoctor />
      <FrequentlyQuestions />
      <Footer />
    </PublicLayout>

  )
}
