# Contributing to EventHorizon-AI

Thanks for your interest in contributing to EventHorizon-AI.

EventHorizon is an independent research platform for forecasting, time-series
validation and the practical value of predictive systems. Contributions are
welcome when they improve reproducibility, rigor, documentation, testing or
real-world usefulness.

## Projects

Contributions may target one of the following repositories:

| Repository | Focus |
|---|---|
| [EventHorizon](https://github.com/EventHorizon-ia/EventHorizon) | Hub, documentation, roadmap and cross-project improvements |
| [demand-m5](https://github.com/EventHorizon-ia/demand-m5) | M5 demand-forecasting research and benchmarks |
| [eventhorizon-demand](https://github.com/EventHorizon-ia/eventhorizon-demand) | Demand-forecasting API and model serving |
| [crypto-h0-edge](https://github.com/EventHorizon-ia/crypto-h0-edge) | BTC/USDT short-horizon research and audit tooling |
| [eventhorizon-crypto](https://github.com/EventHorizon-ia/eventhorizon-crypto) | Crypto execution, trading and dashboard code |
| [honest-validation-toolkit](https://github.com/EventHorizon-ia/honest-validation-toolkit) | Validation methods for time-series models |

## Good first contributions

Good starting points include:

- Improving documentation or README clarity
- Fixing typos, broken links and inconsistent explanations
- Adding reproducible examples or tutorials
- Improving test coverage
- Adding CI workflows
- Improving error messages and code organization
- Adding benchmark experiments
- Improving data-validation checks
- Improving dashboard accessibility or visualizations
- Translating documentation between English and Portuguese

For a first contribution, documentation, tests, small bug fixes and
reproducible examples are usually the best options.

## Before opening an issue

Please search existing issues first.

When opening a new issue, include:

- The repository affected
- A clear title
- The expected behavior
- The actual behavior
- Steps to reproduce the problem
- Relevant error messages or logs
- Python version, operating system and relevant dependency versions
- A minimal reproducible example, when possible

For research or modeling proposals, explain:

- The problem you want to solve
- The proposed approach
- The data or benchmark that would be used
- How the result would be validated
- Potential limitations or risks

## Opening a pull request

1. Fork the repository.
2. Create a focused branch:

```bash
git checkout -b feature/short-description
```

3. Make a small, focused change.
4. Add or update tests when applicable.
5. Run formatting, linting and tests locally.
6. Open a pull request with a clear description.

A good pull request includes:

- What changed
- Why it changed
- Which issue it closes, if applicable
- How to test the change
- Screenshots or output examples, when relevant

Example:

```markdown
## What changed

Added a reproducible walk-forward validation example.

## Why

This makes it easier for contributors to understand the validation workflow.

## Testing

Ran the example locally using Python 3.11.
```

## Research and validation standards

EventHorizon prioritizes honest, reproducible research.

When contributing a model, benchmark, validation method or economic
simulation:

- Use temporal splits appropriate for time-series data.
- Avoid data leakage from future information.
- Clearly separate training, validation and test data.
- Document the baseline used for comparison.
- Report limitations and negative results.
- Do not present validation results as final out-of-sample performance.
- Include reproducible code, configuration and dependency information.
- Avoid unsupported claims about profitability, accuracy or business value.

A result should be reproducible from the documented data, code, configuration
and validation procedure.

## Code style

- Write clear, readable Python.
- Prefer small functions and descriptive names.
- Add type hints where practical.
- Include docstrings for public functions and classes.
- Keep dependencies minimal and documented.
- Do not commit credentials, API keys, private data or large binary files.

## Commit messages

Use short, descriptive commit messages:

```bash
git commit -m "docs: improve demand forecasting validation documentation"
```

Examples:

- `docs: add reproducible M5 validation example`
- `test: add unit tests for block bootstrap`
- `feat: add CI workflow for Python tests`
- `fix: correct broken link in README`

## Review process

Maintainers may request changes to improve clarity, correctness,
reproducibility or alignment with the project’s research standards.

Please respond respectfully to review feedback. Small, well-documented pull
requests are usually easier to review and merge.

## Questions

If you are unsure where to start, open an issue with:

```text
**Area:** documentation / demand / crypto / validation toolkit  
**Proposal:** a short description of what you would like to improve  
**Experience level:** beginner / intermediate / advanced  
```

Thank you for helping make EventHorizon-AI more rigorous, reproducible and
useful.