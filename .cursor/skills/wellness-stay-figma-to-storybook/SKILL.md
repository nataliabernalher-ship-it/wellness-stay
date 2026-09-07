---
name: wellness-stay-figma-to-storybook
description: Implement or update Wellness Stay Design System components from Figma in code and Storybook while preserving the verified components, semantic tokens, variants, and responsive behavior. Use for Figma-to-code work, component creation, or Design System validation in the Wellness Stay project.
---

# Wellness Stay: Figma to Storybook

Implement Figma designs using only verified resources from the Wellness Stay Design System.

## Sources of truth

Before changing code:

1. Inspect the selected component and its variants in Figma through the available Figma integration.
2. Inspect the components and tokens already present in the repository.
3. Inspect the relevant Storybook stories and project conventions.

Treat Figma as the source of truth for visual design and intended variants. Treat the repository as the source of truth for component APIs, token names, and existing implementation. Never assume that an element visible in a mockup is already a Design System component.

## Non-negotiable rules

- Never invent a component, variant, property, state, icon, token, breakpoint, or visual value.
- Reuse an existing component whenever one matches the required purpose.
- Build components to match the verified Figma specification, including layout, dimensions, typography, spacing, variants, states, and behavior.
- Make every implementation responsive according to verified Figma layouts or existing project breakpoints. If responsive behavior is not defined, stop and report what is missing.
- Use only existing semantic tokens in component code. Do not add raw colors, hexadecimal values, RGB/HSL values, utility colors, or new color tokens.
- Do not replace a missing semantic token with a visually similar token merely to complete the task.
- If a required component, variant, token, state, icon, breakpoint, or responsive rule does not exist or cannot be verified, do not create or infer it. Report the gap and identify the affected implementation.
- Do not modify Figma, tokens, public component APIs, or unrelated components unless the user explicitly requests it.

## Workflow

1. Identify the requested Figma component or node.
2. Search the repository for an existing equivalent component and relevant stories.
3. Resolve every visual value to an existing semantic token.
4. Compare Figma variants and states with the existing component API.
5. Implement or update the component without expanding the verified scope.
6. Add or update Storybook stories for every verified variant and relevant state.
7. Verify responsive behavior at the project breakpoints.
8. Check accessibility: semantic HTML, keyboard interaction, focus visibility, labels, disabled states, and contrast where applicable.
9. Validate that no raw color or unapproved token was introduced.
10. Report completed work and any unresolved Design System gaps separately.

## Missing-resource report

When work is blocked, provide a concise report containing:

- Missing resource: component, variant, token, state, icon, breakpoint, or rule.
- Where it is required: Figma node, screen, story, or code location.
- Why the existing Design System cannot represent it.
- Decision needed from the designer or Design System owner.

Do not silently create a workaround. Continue only with portions that can be implemented without guessing.

## Definition of done

Work is complete only when:

- The implementation matches the verified Figma design.
- Existing components are reused where appropriate.
- Only existing semantic tokens are used.
- Verified variants and states are represented in Storybook.
- Responsive behavior has been checked.
- Relevant accessibility behavior has been checked.
- Missing resources and unresolved discrepancies are explicitly reported.
