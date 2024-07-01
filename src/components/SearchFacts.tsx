import React, { useEffect, useCallback, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Button, SpinningLoader, FactsContainer } from "./index";
import { useSearchFactContext } from "../context/";
import {
  StyledSearchFactContainer,
  StyledSearchFactInput,
  StyledLogoContainer,
  StyledLink,
  StyledLogo,
  StyledFlexContainer,
} from "../styles";
import * as config from "../config.json";

export const SearchFact: React.FC = React.memo(() => {
  const { query, setQuery, handleSearch, loading } = useSearchFactContext();

  const { t: translate } = useTranslation();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "Enter") {
        event.preventDefault();
        handleSearch();
        inputRef.current?.blur();
      }
    },
    [handleSearch]
  );

  useEffect(() => {
    const inputElement = inputRef.current;
    if (inputElement) {
      inputElement.addEventListener("keydown", handleKeyDown);
      return () => {
        inputElement.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [handleKeyDown]);

  return (
    <StyledFlexContainer>
      <StyledLogoContainer>
        <StyledLink href="/" title={translate("linkTitle")}>
          <StyledLogo
            src="/chuck-norris-logo.png"
            alt={translate("linkTitle")}
          ></StyledLogo>
        </StyledLink>
      </StyledLogoContainer>
      <StyledSearchFactContainer>
        <StyledSearchFactInput
          title={translate("searchPlaceholder")}
          type="text"
          name="queryInput"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={translate("searchPlaceholder")}
          ref={inputRef}
          maxLength={config.queryMaxLength}
        />
        <Button
          title={translate("searchButton")}
          name={"search"}
          onClick={handleSearch}
        >
          {translate("searchButton")}
        </Button>
      </StyledSearchFactContainer>
      {loading ? <SpinningLoader /> : <FactsContainer />}
    </StyledFlexContainer>
  );
});
