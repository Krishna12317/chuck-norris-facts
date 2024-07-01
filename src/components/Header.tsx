import React, { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./index";
import { useSearchFactContext, useThemeContext } from "../context";
import { StyledHeaderContainer, StyledDropdown } from "../styles";

export const Header: React.FC = React.memo(() => {
  const { setError, setFacts, setQuery } = useSearchFactContext();
  const { t: translate, i18n } = useTranslation();
  const { theme, toggleTheme } = useThemeContext();

  const changeLanguage = useCallback(
    (lng: string) => {
      i18n.changeLanguage(lng);
      setError("");
      setQuery("");
      setFacts([]);
    },
    [i18n, setError, setFacts, setQuery]
  );

  const handleLanguageChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      changeLanguage(e.target.value);
      e.target.blur();
    },
    [changeLanguage]
  );

  return (
    <StyledHeaderContainer>
      <div>
        <StyledDropdown
          title={translate("languageSelection")}
          name={"languageSelector"}
          value={i18n.language}
          onChange={handleLanguageChange}
        >
          <option value="en">{translate("english")}</option>
          <option value="ar">{translate("arabic")}</option>
        </StyledDropdown>
        <Button
          title={
            theme === "light" ? translate("darkMode") : translate("lightMode")
          }
          name={"toggleTheme"}
          onClick={toggleTheme}
        >
          {theme === "light" ? translate("darkMode") : translate("lightMode")}
        </Button>
      </div>
    </StyledHeaderContainer>
  );
});
