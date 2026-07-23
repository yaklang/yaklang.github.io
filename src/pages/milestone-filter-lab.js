import React, { useMemo, useState } from "react";
import Layout from "@theme/Layout";
import styles from "./milestone-filter-lab.module.css";

const samples = [
  {
    year: "2024",
    eyebrow: "冷蓝 · 大型会场",
    title: "中国信息通信大会现场",
    description:
      "压低过强的蓝色与红色地毯，同时保留屏幕、人物和空间层次。",
    image: "/img/project-credibility/2024-cicc-conference.jpg",
    alt: "2024 中国信息通信大会现场",
    position: "center center",
    treatment: "photo",
  },
  {
    year: "2023",
    eyebrow: "暖红 · 品牌发布",
    title: "CDSL-YAK 开源发布会",
    description:
      "收敛舞台红光，让 YAK 橙色成为视觉重点，避免画面变成泛黄滤镜。",
    image: "/img/project-credibility/2023-yaklang-open-source-launch.jpg",
    alt: "CDSL-YAK 开源发布会现场",
    position: "center center",
    treatment: "photo",
  },
  {
    year: "2021",
    eyebrow: "暗场 · 人物与屏幕",
    title: "Yak 与 Yakit 在 XCon 发布",
    description:
      "提高暗部秩序但不压死黑位，人物肤色与演示屏内容继续保持可辨认。",
    image: "/img/project-credibility/2021-xcon-yak-yakit-release.jpeg",
    alt: "Yak 与 Yakit 在 XCon 发布现场",
    position: "center center",
    treatment: "photo",
  },
  {
    year: "UI",
    eyebrow: "高亮 · 产品界面",
    title: "Yakit Web Fuzzer",
    description:
      "产品截图不改变色相，只使用同一套容器、边缘暗化和细微扫描纹理。",
    image: "/img/home/third/fuzzer.png",
    alt: "Yakit Web Fuzzer 产品界面",
    position: "center center",
    treatment: "interface",
  },
];

const codeTexture = [
  "0x7F  01  YAK  8B  00",
  "10  3A  6C  0x2D  11",
  "01  00  7E  4F  8A",
  "YAK  2C  09  01  7D",
].join("\n");

const presets = [
  { label: "原图", value: 0 },
  { label: "轻量", value: 60 },
  { label: "README 参数", value: 100 },
  { label: "偏重", value: 130 },
];

function getPhotoFilter(strength, treatment) {
  if (treatment === "interface") {
    return "saturate(1) contrast(1) brightness(1)";
  }

  const value = strength / 100;
  const saturation = 1 - 0.28 * value;
  const contrast = 1 + 0.06 * value;
  const brightness = 1 - 0.16 * value;
  const sepia = 0.12 * value;
  const hue = -6 * value;

  return [
    `saturate(${saturation.toFixed(3)})`,
    `contrast(${contrast.toFixed(3)})`,
    `brightness(${brightness.toFixed(3)})`,
    `sepia(${sepia.toFixed(3)})`,
    `hue-rotate(${hue.toFixed(2)}deg)`,
  ].join(" ");
}

function Photo({
  sample,
  filtered,
  strength,
  label,
}) {
  const layerStrength = filtered ? strength / 100 : 0;
  const isInterface = sample.treatment === "interface";

  return (
    <div
      className={`${styles.photo} ${
        isInterface ? styles.interfacePhoto : ""
      }`}
      style={{ "--layer-strength": layerStrength }}
    >
      <img
        src={sample.image}
        alt={sample.alt}
        style={{
          filter: filtered
            ? getPhotoFilter(strength, sample.treatment)
            : "none",
          objectPosition: sample.position,
        }}
      />
      {filtered && (
        <>
          <span className={styles.tone} aria-hidden="true" />
          <span className={styles.texture} aria-hidden="true" />
          <pre className={styles.code} aria-hidden="true">
            {codeTexture}
          </pre>
        </>
      )}
      <span className={styles.imageLabel}>{label}</span>
    </div>
  );
}

function SampleCard({ sample, strength, compare }) {
  return (
    <article className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.year}>{sample.year}</span>
        <div>
          <p className={styles.eyebrow}>{sample.eyebrow}</p>
          <h2>{sample.title}</h2>
        </div>
      </div>

      <div
        className={`${styles.comparison} ${
          compare ? "" : styles.filteredOnly
        }`}
      >
        {compare && (
          <Photo
            sample={sample}
            filtered={false}
            strength={strength}
            label="原图"
          />
        )}
        <Photo
          sample={sample}
          filtered
          strength={strength}
          label={sample.treatment === "interface" ? "统一框架" : "品牌滤镜"}
        />
      </div>

      <p className={styles.description}>{sample.description}</p>
    </article>
  );
}

export default function MilestoneFilterLab() {
  const [strength, setStrength] = useState(100);
  const [compare, setCompare] = useState(true);
  const strengthLabel = useMemo(() => {
    if (strength < 40) return "轻";
    if (strength < 80) return "中";
    return "推荐值";
  }, [strength]);

  return (
    <Layout
      title="里程碑照片滤镜实验室"
      description="Yak Project 里程碑实拍照片统一调色预览"
    >
      <main className={styles.page}>
        <section className={styles.hero}>
          <div className={styles.heroMark} aria-hidden="true">
            00 / YAK / 26
          </div>
          <p className={styles.kicker}>PROJECT MILESTONES · VISUAL TEST</p>
          <h1>纪实不变，视觉归一。</h1>
          <p className={styles.lead}>
            同一套滤镜放在冷蓝、暖红、暗场与产品界面上对照测试。
            默认值刻意保持克制：统一品牌气质，但不把真实事件照片变成宣传海报。
          </p>
        </section>

        <section className={styles.toolbar} aria-label="滤镜预览控制">
          <div className={styles.rangeGroup}>
            <div className={styles.rangeHeading}>
              <span>滤镜强度</span>
              <strong>
                {strength}% · {strengthLabel}
              </strong>
            </div>
            <input
              type="range"
              min="0"
              max="130"
              value={strength}
              onInput={(event) => setStrength(Number(event.currentTarget.value))}
              aria-label="滤镜强度"
            />
            <div className={styles.presetRow} aria-label="滤镜强度快捷档位">
              {presets.map((preset) => (
                <button
                  key={preset.value}
                  type="button"
                  className={strength === preset.value ? styles.activePreset : ""}
                  onClick={() => setStrength(preset.value)}
                  aria-pressed={strength === preset.value}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <button
            type="button"
            className={styles.compareButton}
            onClick={() => setCompare((value) => !value)}
            aria-pressed={compare}
          >
            <span className={styles.buttonDot} />
            {compare ? "关闭原图对照" : "打开原图对照"}
          </button>
        </section>

        <section className={styles.legend} aria-label="当前滤镜说明">
          <span>
            <i className={styles.orangeDot} />
            琥珀高光
          </span>
          <span>
            <i className={styles.charcoalDot} />
            炭黑边缘
          </span>
          <span>
            <i className={styles.lineDot} />
            低透明扫描纹理
          </span>
          <span className={styles.recommended}>100% 为建议上线值</span>
        </section>

        <section className={styles.grid}>
          {samples.map((sample) => (
            <SampleCard
              key={sample.title}
              sample={sample}
              strength={strength}
              compare={compare}
            />
          ))}
        </section>

        <section className={styles.verdict}>
          <p className={styles.kicker}>DESIGN VERDICT</p>
          <h2>滤镜只服务于照片，不凌驾于证据。</h2>
          <div className={styles.verdictGrid}>
            <p>
              <strong>实拍照片</strong>
              使用完整调色、轻微边缘收暗和低透明字符纹理。
            </p>
            <p>
              <strong>人物场景</strong>
              不遮脸、不模糊，不使用会改变身份与事实的生成式处理。
            </p>
            <p>
              <strong>产品截图</strong>
              保留界面原色，只统一容器、边框和环境纹理。
            </p>
          </div>
        </section>
      </main>
    </Layout>
  );
}
