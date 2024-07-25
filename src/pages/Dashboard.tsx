import React from 'react'
import PriceComponent from '../components/PriceComponent'
import PlansGlobal from '../components/PlansGlobal'
import PublicLayout from '../templates/PublicLayout'

export default function Dashboard() {
  return (
    <PublicLayout>
        <PriceComponent />
    </PublicLayout>
  )
}
