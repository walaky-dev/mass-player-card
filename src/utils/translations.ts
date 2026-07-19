import { ExtendedHass } from "../const/types";
import ca from "../translations/ca";
import de from "../translations/de";
import en from "../translations/en";
import es from "../translations/es";
import fr from "../translations/fr";
import hu from "../translations/hu";
import it from "../translations/it";
import nl from "../translations/nl";
import pt from "../translations/pt";

const TRANSLATIONS = {
  ca,
  de,
  en,
  es,
  fr,
  hu,
  "hu-HU": hu,
  it,
  nl,
  pt,
};
const DEFAULT_LANGUAGE = "hu";
const DEFAULT_TRANSLATIONS = TRANSLATIONS.hu;

export function getTranslation(key: string, hass: ExtendedHass | undefined) {
  const lang = "hu";
  /* eslint-disable
    @typescript-eslint/no-unsafe-assignment,
  */
  const translations: Record<string, string | string[]> =
    TRANSLATIONS[lang] ?? DEFAULT_TRANSLATIONS;
  const _default = DEFAULT_TRANSLATIONS[key] ?? key;
  return translations[key] ?? _default;
  /* eslint-enable
    @typescript-eslint/no-unsafe-assignment,
  */
}
