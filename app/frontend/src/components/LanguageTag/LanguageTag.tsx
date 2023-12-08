import "./LanguageTag.css"

interface LanguageTagProps {
    language: string;
}
  
const LanguageTag = ({ language } : LanguageTagProps) => {
    return (
      <span className="language-tab">
        {language}
      </span>
    );
};
  
export default LanguageTag;