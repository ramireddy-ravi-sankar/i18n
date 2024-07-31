
import './App.css'
import { Trans, useTranslation } from 'react-i18next'
import LanguageSelector from './components/language-selector'

function App() {
  const {t}=useTranslation()
  const line1 = t("description.line1", { name: "Ravi" });
  
  return (
    <div className='container'>
      <LanguageSelector/>
     <h1>{t("greeting")}</h1>
     <span>

      <Trans 
        
        i18nKey={line1}
        values={{
          name:"Ravi Sankar",
        }}
        components={{1:<b/>}}
      />
     </span>
    </div>
  )
}

export default App
