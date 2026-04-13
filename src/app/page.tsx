import Hero from '@/components/containers/Hero'
import Problema from '@/components/containers/Problema'
import Solucao from '@/components/containers/Solucao'
import Diferencial from '@/components/containers/Diferencial'
import SocialProof from '@/components/containers/SocialProof'
import Quiz from '@/components/containers/Quiz'
import FAQ from '@/components/containers/FAQ'
import FinalCTA from '@/components/containers/FinalCTA'

export default function Home() {
  return (
    <main className="w-full">
      <Hero />
      <Problema />
      <Solucao />
      <Diferencial />
      <SocialProof />
      <Quiz />
      <FAQ />
      <FinalCTA />
    </main>
  )
}
