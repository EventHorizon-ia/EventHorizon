
# EventHorizon-AI

> **An independent AI forecasting and time-series research platform.**

EventHorizon-AI builds and validates forecasting systems for real-world
decision-making, with a focus on demand forecasting, statistical validation,
and understanding whether better predictions actually create business value.

---

## Why This Exists

Most AI forecasting projects sell hype. We sell proof.

Every model released under the EventHorizon umbrella passes through the same rigorous validation pipeline before it is considered technically validated. We document failures as carefully as successes, because **honest methodology is the product**.

But a validated model is not automatically a valuable product.

A forecasting system can be statistically accurate and still fail to create enough operational or economic value for a business to adopt it. That is why EventHorizon also investigates **where forecasting actually matters** — and under what operational conditions prediction errors become costly enough to justify a solution.

---

## Products

| Product | Domain | Status | Key Result | Honest Notes |
|---|---|---|---|---|
| **EventHorizon Crypto** | BTC/USDT 5-second direction | ✅ Technically validated | **+8 pp edge** (60% vs 52% baseline) | Economically unviable under standard exchange fees; published as a complete case study |
| **EventHorizon Demand** | Retail demand forecasting (M5 Walmart) | ✅ Technically validated · 🔎 Market validation ongoing | **~30% lower forecast error** (WAPE 30.93% vs. 44.15% baseline) | Statistically significant in 7/7 stores; WI_1 shows smaller margin, documented openly |

> **Technical validation and market validation are treated as separate problems.**

---

## EventHorizon Demand

**EventHorizon Demand** is a machine-learning system for daily and weekly demand forecasting.

The current system uses historical sales and temporal features, together with price and promotional information, to estimate future demand.

On the M5 retail benchmark, the final model achieved:

- **30.93% WAPE**
- **44.15% WAPE** for the naive lag-7 baseline
- **~30% lower forecast error** than the baseline

These results establish **technical model performance**, not business ROI.

Current research focuses on identifying real-world situations where improved forecasting can meaningfully change purchasing, production, or replenishment decisions.

---

## From Model to Product

A forecasting model can perform well on historical data without necessarily solving a sufficiently painful business problem.

For **EventHorizon Demand**, current market research focuses on identifying businesses where forecasting errors have meaningful operational consequences.

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

> **forecasting error → meaningful loss → recurring problem → insufficient existing process → measurable value from better forecasting**

Market validation is therefore treated as an **empirical research problem**, rather than something assumed from model performance alone.

---

## Validation Pipeline

The same pipeline protects every product we release:

- ⏳ **Walk-forward analysis** with temporal embargo
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
| [**eventhorizon-demand**](https://github.com/EventHorizon-ia/eventhorizon-demand) | Production code | Forecasting API, model serving, dashboard |
| [**crypto-h0-edge**](https://github.com/EventHorizon-ia/crypto-h0-edge) | Research | Edge discovery, full audit trail, permutation tests |
| [**demand-m5**](https://github.com/EventHorizon-ia/demand-m5) | Research | M5 baseline, feature iteration, final model, metrics |
| [**honest-validation-toolkit**](https://github.com/EventHorizon-ia/honest-validation-toolkit) | Shared library | Bootstrap, walk-forward, permutation, WAPE, MASE |

---

## Philosophy

| Principle | Description |
|---|---|
| 🔬 **Rigor over Hype** | Every number ships with confidence intervals and documented limitations. |
| 🧾 **Honesty over Marketing** | We publish failures as carefully as successes. |
| 🛠️ **Evidence over Assumptions** | A technically strong model is not assumed to be a valuable product without market evidence. |
| 🔍 **Research over Guesswork** | ICP, product scope, and positioning are refined through real-world observations. |

---

## Author

**Lucas — Brazil.**  
**OBICT finalist.**

Built **EventHorizon-AI independently**, from the forecasting systems and validation infrastructure to the audit tooling.

---

## Links

| Resource | URL |
|---|---|
| 🚀 **EventHorizon-AI Hub** | [github.com/EventHorizon-ia/EventHorizon](https://github.com/EventHorizon-ia/EventHorizon) |
| 📈 **Crypto Research** | [github.com/EventHorizon-ia/crypto-h0-edge](https://github.com/EventHorizon-ia/crypto-h0-edge) |
| 📦 **Demand Research** | [github.com/EventHorizon-ia/demand-m5](https://github.com/EventHorizon-ia/demand-m5) |
| 🧪 **Validation Toolkit** | [github.com/EventHorizon-ia/honest-validation-toolkit](https://github.com/EventHorizon-ia/honest-validation-toolkit) |
| 🌐 **Public Audit Dashboard** | [eventhorizon-ia.github.io](https://eventhorizon-ia.github.io/trader-ai/dashboard-en.html) |

---

<p align="center">

**EventHorizon-AI — Proof, not promises.**

</p>

