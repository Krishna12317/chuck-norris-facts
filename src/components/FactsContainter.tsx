import React, { useCallback, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button } from "./Button";
import { useSearchFactContext } from "../context";
import {
  StyledFactsContainer,
  StyledFact,
  StyledFactsCount,
  StyledWrapper,
  StyledButtonWrapper,
  StyledItalicNote,
} from "../styles";

export const FactsContainer: React.FC = React.memo(() => {
  const { facts, currentFactIndex, error, handleNextFact, handlePreviousFact } =
    useSearchFactContext();
  const { t: translate } = useTranslation();

  const handleArrowKeyPress = useCallback(
    (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        handleNextFact();
      } else if (event.key === "ArrowLeft") {
        handlePreviousFact();
      }
    },
    [handleNextFact, handlePreviousFact]
  );

  useEffect(() => {
    document.addEventListener("keydown", handleArrowKeyPress);
    return () => {
      document.removeEventListener("keydown", handleArrowKeyPress);
    };
  }, [handleArrowKeyPress]);

  return (
    <StyledWrapper>
      {(facts.length > 0 || error) && (
        <>
          {!error && (
            <StyledButtonWrapper>
              <Button
                title={translate("previousButton")}
                name={"previous"}
                onClick={handlePreviousFact}
              >
                {translate("previousButton")}
              </Button>
              <Button
                title={translate("nextButton")}
                name={"next"}
                onClick={handleNextFact}
              >
                {translate("nextButton")}
              </Button>
            </StyledButtonWrapper>
          )}
          <StyledFactsContainer>
            {facts.length > 0 ? (
              <>
                <StyledFact title={facts[currentFactIndex].value} tabIndex={0}>
                  {facts[currentFactIndex].value}
                </StyledFact>
                <StyledFactsCount
                  title={translate("factCount", {
                    current: currentFactIndex + 1,
                    total: facts.length,
                  })}
                  tabIndex={0}
                >
                  {translate("factCount", {
                    current: currentFactIndex + 1,
                    total: facts.length,
                  })}
                </StyledFactsCount>
              </>
            ) : (
              <StyledFact title={error} tabIndex={0}>
                {error}
              </StyledFact>
            )}
          </StyledFactsContainer>
          {!error && (
            <StyledItalicNote title={translate("factNote")} tabIndex={0}>
              {translate("factNote")}
            </StyledItalicNote>
          )}
        </>
      )}
    </StyledWrapper>
  );
});
