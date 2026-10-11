| Project | What it is | Status |
|---|---|---|
| [**EventHorizon Demand**](https://github.com/EventHorizon-ia/demand-m5) | Retail demand forecasting on the M5 benchmark | ✅ MVP technically validated · market validation ongoing |
| [**EventHorizon Crypto**](https://github.com/EventHorizon-ia/crypto-h0-edge) | BTC/USDT short-horizon direction research | 🔎 Economic case study · economically unviable |
| [**honest-validation-toolkit**](https://github.com/EventHorizon-ia/honest-validation-toolkit) | Open-source validation methods for time-series models | 🧪 Shared library |

> **Technical validation and market validation are separate problems.**

---

## Why This Exists

Most AI forecasting projects sell hype. We sell proof.

Every model released under the EventHorizon umbrella passes through a rigorous
validation pipeline before it is considered technically validated. We document
failures as carefully as successes, because **honest methodology is the product**.

But a validated model is not automatically a valuable product.

A forecasting system can be statistically accurate and still fail to create
enough operational or economic value for a business to adopt it. That is why
EventHorizon also investigates **where forecasting actually matters** — and
under what operational conditions prediction errors become costly enough to
justify a solution.

---

## Products

| Product | Domain | Status | Honest Notes |
|---|---|---|---|
| **EventHorizon Crypto** | BTC/USDT 5-second direction | 🔎 Economic case study | Economically unviable under the evaluated execution assumptions; published as a complete negative-result case study |
| **EventHorizon Demand** | Retail demand forecasting (M5 Walmart) | ✅ MVP technically validated · 🔎 Market validation ongoing | **31.03% overall WAPE** without `lag_365`; outperformed the naive lag-7 baseline in 7/7 stores | Current MVP result; legacy 30.93% WAPE retained only as historical context |


---

## EventHorizon Demand

![EventHorizon Demand — WAPE by store, M5 temporal holdout validation](docs/images/demand-wape-by-store.png)

**EventHorizon Demand** is a machine-learning system for daily and weekly
demand forecasting.

**Repository:** [eventhorizon-demand](https://github.com/EventHorizon-ia/eventhorizon-demand)  
**Research:** [demand-m5](https://github.com/EventHorizon-ia/demand-m5)

The current MVP uses historical sales, temporal features, price and
promotional information to estimate future demand. It does **not** use
`lag_365`, making it more suitable for use cases with shorter sales history.

On the M5 retail benchmark, the current MVP achieved:

| Metric | EventHorizon Demand MVP |
|---|---:|
| Overall WAPE | **31.03%** |
| Validation setup | Temporal holdout: train ≤ 2014, validate ≥ 2015 |
| Feature set | No `lag_365`; includes short-term lags, EWMA, rolling volatility, calendar, price and promotion features |
| Store-level result | Outperformed the naive lag-7 baseline in 7/7 stores |

These results establish **technical model performance**, not business ROI.

A previous legacy model achieved 30.93% WAPE, but it used `lag_365` and was
trained before a weekend-feature bug fix. It is retained only as historical
context and must not be interpreted as the current MVP’s performance.

Current research focuses on identifying real-world situations where improved
forecasting can meaningfully change purchasing, production, or replenishment
decisions.

---

## EventHorizon Crypto

**Model:** `h0_edge_v2` — `mente_h0_v2_h0_20260717_161041.pt`  
**Task:** BTC/USDT 5-second directional classification (H0).  
**Evaluation:** temporal validation period; simulated maker execution.

This checkpoint was evaluated with simulated limit orders placed one tick away
from the current price, with a five-second waiting window. Trades were closed
at the price five seconds after the signal.

Under the evaluated assumptions, the strategy was economically unviable.

**Explore the public audit dashboard:**  
👉 [EventHorizon Crypto Dashboard](https://eventhorizon-ia.github.io/trader-ai/dashboard-en.html)

**Research repository:** [crypto-h0-edge](https://github.com/EventHorizon-ia/crypto-h0-edge)

### Honest limitations

- The evaluation period was also used for checkpoint selection.
- The simulation assumes that a limit order fills when the price touches its
  level; it does not model queue position, partial fills, or adverse selection.
- Signals may overlap; the simulation does not model position limits, order
  cancellation, or risk management.
- The displayed execution test used a zero maker fee; fee sensitivity was
  evaluated separately.

**Conclusion:** technically evaluated, but not economically viable under the
tested execution assumptions.

---

## From Model to Product

A forecasting model can perform well on historical data without necessarily
solving a sufficiently painful business problem.

For **EventHorizon Demand**, current market research focuses on identifying
businesses where forecasting errors have meaningful operational consequences.

We are investigating factors such as:

- 📦 **Demand uncertainty**
- 🌱 **Product perishability**
- 🚚 **Replenishment time**
- 💰 **Cost of overstock and stock-outs**
- 📊 **Existing forecasting processes**
- 🔁 **Historical feedback loops**
- 📈 **Seasonality and demand peaks**
- 🧮 **Magnitude and frequency of forecasting errors**

The goal is not simply to find businesses where demand is difficult to predict.

The goal is to identify situations where:

> **forecasting error → meaningful loss → recurring problem → insufficient
> existing process → measurable value from better forecasting**

Market validation is therefore treated as an **empirical research problem**,
rather than something assumed from model performance alone.

---

## Validation Pipeline

The same validation principles protect every product we release:

- ⏳ **Temporal validation** with embargo between training and evaluation
- 🧩 **Block bootstrap** by date, respecting temporal and cross-sectional structure
- 🔀 **Paired gap bootstrap** comparing the model against a baseline on the same days
- 🔬 **Permutation testing** for classification problems

This pipeline has been extracted into a standalone open-source library:

**[honest-validation-toolkit](https://github.com/EventHorizon-ia/honest-validation-toolkit)**

---

## Repository Map

| Repository | Purpose | Contents |
|---|---|---|
| [**eventhorizon-crypto**](https://github.com/EventHorizon-ia/eventhorizon-crypto) | Production code | Trading bot, execution engine, audit dashboard |
| [**eventhorizon-demand**](https://github.com/EventHorizon-ia/eventhorizon-demand) | Production code | Forecasting API and model serving |
| [**crypto-h0-edge**](https://github.com/EventHorizon-ia/crypto-h0-edge) | Research | Edge discovery, audit trail, permutation tests |
| [**demand-m5**](https://github.com/EventHorizon-ia/demand-m5) | Research | M5 baseline, feature iteration, final model, metrics |
| [**honest-validation-toolkit**](https://github.com/EventHorizon-ia/honest-validation-toolkit) | Shared library | Bootstrap, walk-forward, permutation, WAPE, MASE |

---

## Philosophy

| Principle | Description |
|---|---|
| 🔬 **Rigor over Hype** | Every result ships with documented limitations. |
| 🧾 **Honesty over Marketing** | We publish failures as carefully as successes. |
| 🛠️ **Evidence over Assumptions** | A technically strong model is not assumed to be a valuable product without market evidence. |
| 🔍 **Research over Guesswork** | ICP, product scope, and positioning are refined through real-world observations. |

---

## Contributing

EventHorizon is open to focused contributions, especially around:

- Documentation and reproducible examples
- Time-series validation methods
- Benchmark experiments
- Tests and CI
- Dashboard and data-visualization improvements

See [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

---

## Author

**Lucas — Brazil.**  
**OBICT finalist.**

Built **EventHorizon-AI independently**, from the forecasting systems and
validation infrastructure to the audit tooling.

---

## Links

| Resource | URL |
|---|---|
| 🚀 **EventHorizon-AI Hub** | [github.com/EventHorizon-ia/EventHorizon](https://github.com/EventHorizon-ia/EventHorizon) |
| 📈 **Crypto Research** | [github.com/EventHorizon-ia/crypto-h0-edge](https://github.com/EventHorizon-ia/crypto-h0-edge) |
| 📦 **Demand Research** | [github.com/EventHorizon-ia/demand-m5](https://github.com/EventHorizon-ia/demand-m5) |
| 🧪 **Validation Toolkit** | [github.com/EventHorizon-ia/honest-validation-toolkit](https://github.com/EventHorizon-ia/honest-validation-toolkit) |
| 🌐 **EventHorizon Crypto Audit Dashboard** | [eventhorizon-ia.github.io](https://eventhorizon-ia.github.io/trader-ai/dashboard-en.html) |

---

<p align="center">

**EventHorizon-AI — Proof, not promises.**

</p>