!(function () {
  "use strict";
  function t(e) {
    return (
      (t =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (t) {
              return typeof t;
            }
          : function (t) {
              return t &&
                "function" == typeof Symbol &&
                t.constructor === Symbol &&
                t !== Symbol.prototype
                ? "symbol"
                : typeof t;
            }),
      t(e)
    );
  }
  new (class {
    constructor() {
      var e, o, a;
      (e = this),
        (o = "initAggregatorTrendChart"),
        (a = (function () {
          let t = !1;
          return function () {
            if (!t) {
              t = !0;
              const e = document.querySelectorAll(".aggregatorTrendChart");
              if (!e) return;
              function o(t, e) {
                let o, a, n;
                const i = e.right - e.left,
                  r = e.bottom - e.top;
                return (
                  (n && o === i && a === r) ||
                    ((o = i),
                    (a = r),
                    (n = t.createLinearGradient(0, e.bottom, 0, e.top)),
                    n.addColorStop(0, "rgb(131, 88, 255)"),
                    n.addColorStop(1, "rgb(255, 53, 104)")),
                  n
                );
              }
              const a = {
                data: {
                  labels: [],
                  datasets: [
                    {
                      type: "line",
                      pointRadius: 0,
                      backgroundColor: "#8358FF",
                      borderWidth: 2,
                      borderColor: function (t) {
                        const e = t.chart,
                          { ctx: a, chartArea: n } = e;
                        if (n) return o(a, n);
                      },
                      data: [],
                      tension: 0.5,
                    },
                  ],
                },
                options: {
                  maintainAspectRatio: !1,
                  responsive: !0,
                  layout: {
                    padding: { left: -5, bottom: -5, right: 5, top: 5 },
                  },
                  interaction: { intersect: !1, mode: "index" },
                  scales: {
                    x: { grid: { display: !1 }, ticks: { display: !1 } },
                    y: {
                      border: { display: !1 },
                      grid: { display: !1 },
                      ticks: { display: !1 },
                    },
                  },
                  plugins: {
                    legend: { display: !1 },
                    decimation: { enabled: !0 },
                    tooltip: {
                      enabled: !1,
                      external: function (t) {
                        let e = document.getElementById("chartjs-tooltip");
                        e ||
                          ((e = document.createElement("div")),
                          (e.style.background = "#131740"),
                          (e.style.color = "#ffffff"),
                          (e.style.textAlign = "left"),
                          (e.style.padding = "10px"),
                          (e.style.borderRadius = "8px"),
                          (e.id = "chartjs-tooltip"),
                          (e.innerHTML = "<table></table>"),
                          document.body.appendChild(e));
                        const o = t.tooltip;
                        if (0 === o.opacity) return void (e.style.opacity = 0);
                        if (
                          (e.classList.remove("above", "below", "no-transform"),
                          o.yAlign
                            ? e.classList.add(o.yAlign)
                            : e.classList.add("no-transform"),
                          o.body)
                        ) {
                          const t = o.title || [],
                            a = o.footer || [];
                          let n = "<thead>";
                          t.forEach(function (t) {
                            n += "<tr><th>" + t + "</th></tr>";
                          }),
                            a.forEach(function (t) {
                              n += "<tr><th>" + t + "</th></tr>";
                            }),
                            (n += "</thead>"),
                            (e.querySelector("table").innerHTML = n);
                        }
                        const a = t.chart.canvas.getBoundingClientRect(),
                          n = Chart.helpers.toFont(o.options.bodyFont);
                        (e.style.opacity = 1),
                          (e.style.position = "absolute"),
                          (e.style.left =
                            a.left + window.pageXOffset + o.caretX + "px"),
                          (e.style.top =
                            a.top + window.pageYOffset + o.caretY + "px"),
                          (e.style.font = n.string),
                          (e.style.padding =
                            o.padding + "px " + o.padding + "px"),
                          (e.style.pointerEvents = "none");
                      },
                      usePointStyle: !0,
                      position: "nearest",
                      yAlign: "bottom",
                      callbacks: {
                        footer: (t) => {
                          let e = 1;
                          return (
                            t.forEach(function (t) {
                              e *= t.parsed.y;
                            }),
                            Intl.NumberFormat("en-US", {
                              notation: "compact",
                            }).format(e) + " mints"
                          );
                        },
                      },
                    },
                  },
                  animation: !1,
                },
              };
              (Chart.defaults.borderColor = "rgba(0, 0, 0, 0)"),
                e.forEach((t) => {
                  const e = t.hasAttribute("data-datapoints")
                      ? JSON.parse(t.dataset.datapoints)
                      : void 0,
                    o = t.hasAttribute("data-labels")
                      ? JSON.parse(t.dataset.labels)
                      : void 0;
                  (a.data.datasets[0].data = e),
                    (a.data.labels = o),
                    (this.aggregatorChart = new Chart(t, a));
                });
            }
          };
        })()),
        (o = (function (e) {
          var o = (function (e, o) {
            if ("object" !== t(e) || null === e) return e;
            var a = e[Symbol.toPrimitive];
            if (void 0 !== a) {
              var n = a.call(e, o);
              if ("object" !== t(n)) return n;
              throw new TypeError(
                "@@toPrimitive must return a primitive value."
              );
            }
            return String(e);
          })(e, "string");
          return "symbol" === t(o) ? o : String(o);
        })(o)) in e
          ? Object.defineProperty(e, o, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0,
            })
          : (e[o] = a),
        (this.activityChartElement = document.getElementById("activityChart")),
        (this.mintsTab = document.getElementById("mints-tab")),
        this.activityChartElement && this.initActivityChart(),
        this.mintsTab &&
          this.mintsTab.addEventListener("shown.bs.tab", () => {
            this.initAggregatorTrendChart();
          });
    }
    initActivityChart() {
      const t = {
        data: {
          labels: [
            "Jan 23",
            "Jan 24",
            "Jan 25",
            "Jan 26",
            "Jan 27",
            "Jan 28",
            "Jan 29",
          ],
          datasets: [
            {
              type: "line",
              label: "Avg. price",
              backgroundColor: "#10B981",
              borderColor: "#10B981",
              data: [54.73, 64, 53, 96, 130, 100, 102.88],
            },
            {
              type: "bar",
              label: "Sales",
              backgroundColor: "#E7E8EC",
              data: [25, 20, 40, 130, 75, 48, 12],
            },
          ],
        },
        options: {
          maintainAspectRatio: !1,
          responsive: !0,
          interaction: { intersect: !1, mode: "index" },
          scales: {
            x: { grid: { display: !1 } },
            y: { ticks: { stepSize: 50 } },
          },
          plugins: {
            legend: { display: !1 },
            decimation: { enabled: !0 },
            tooltip: {
              usePointStyle: !0,
              position: "nearest",
              backgroundColor: "#131740",
              titleAlign: "center",
              bodyAlign: "center",
              footerAlign: "center",
              padding: 12,
              displayColors: !1,
              yAlign: "bottom",
              callbacks: {
                footer: (t) => {
                  let e = 1;
                  return (
                    t.forEach(function (t) {
                      e *= t.parsed.y;
                    }),
                    "Volume: " +
                      Intl.NumberFormat("en-US", {
                        notation: "compact",
                      }).format(e)
                  );
                },
              },
            },
          },
          animation: !1,
        },
      };
      (Chart.defaults.font.size = 14),
        (Chart.defaults.font.family =
          "'DM Sans', 'Helvetica', 'Arial', sans-serif"),
        (Chart.defaults.color = "#5A5D79"),
        (Chart.defaults.borderColor = "rgba(196, 197, 207, .25)"),
        new Chart(this.activityChartElement, t);
    }
  })();
})();
