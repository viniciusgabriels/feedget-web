import { CloseButton } from "../../CloseButton";
import SuccessImageUrl from "../../../assets/success.svg";

interface FeedbackSuccessStepProps {
  onFeedbackRestartRequested: () => void;
}

export function FeedbackSuccessStep({ onFeedbackRestartRequested } : FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>

      <div className='flex flex-col items-center py-10 w-[304px]'>
        <img src={SuccessImageUrl} alt='Imagem de um sinal de correto'/>

        <span className='texl-xl mt-2'>Agradecemos o feedback!</span>

        <button 
          type='button'
          onClick={onFeedbackRestartRequested}
          className='py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 focus:outline-none'
        >
          Quero enviar outro
        </button>
      </div>
    </>
  )
}