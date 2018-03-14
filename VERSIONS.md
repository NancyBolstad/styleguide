# Versioning

This file should contain all changes in the Styleguide.

- Use version in package.json ("version": "1.1.0")
- The numbers represent, "Major", "Minor" and "Patch"
- "Major" is reserved for rewrites of the styleguide, or entire Telia design rebrands (extremely rare).
- "Minor" in this context means _breaking changes_ - such as a change in a components HTML structure, or a change in a CSS class name.
- "Patch" is reserved for smaller CSS changes, tweaks and improvements. Styleguide users are safe to upgrade to new patches.
  Also, _new components_ and _new component variants_ are also patches, since they do not break anything for other channels.

For Major and Minor changes in version you must notify everyone in the #styleguide Slack Channel.

# Version History

Only noteworthy versions shown (minor changes are omitted).

## 1.1.12 [extended components]
- Molecule: TextArea, TextAreaWithLabel and TextBoxWithLabel - Added disable state

## 1.1.11 [extended component]
- Organism: Form - Added fieldset as an element to form

## 1.1.10 [new component]
- Atom: AlertText

## 1.1.8 [new variant of component]
- Atom/Molecule: Subscription purple

## 1.1.6 [new component]
- Atom: InputError

## 1.1.4 [new component]
- Molecule: TextAreaWithLabel

## 1.1.3 [new variant of component]
- Atom: List--icon-text-links

## 1.1.2 [new component]
- Atom: TelephoneNumberLink

## 1.1.1 [new component]
- Atom: ShadowBox

## 1.1.0 [breaking changes]

- Molecule - StepByStep - New Pebble type and separated Circle type. Steps can now change between types with just a class change.