export type DownloadPlatformKey =
  | "macIntel"
  | "macApple"
  | "linux"
  | "windows"
  | "linuxArm64";

const isArmArchitecture = (value: string) => /arm|aarch64/i.test(value || "");

const detectMacArchByWebGL = (): "macApple" | "macIntel" | null => {
  try {
    const canvas = document.createElement("canvas");
    const gl =
      canvas.getContext("webgl") || canvas.getContext("experimental-webgl");
    if (!gl || !(gl instanceof WebGLRenderingContext)) return null;
    const debugInfo = gl.getExtension("WEBGL_debug_renderer_info");
    if (!debugInfo) return null;
    const renderer = String(
      gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) || "",
    );
    if (/apple\s*gpu|m[1-4](\s|$)|apple silicon/i.test(renderer)) {
      return "macApple";
    }
    if (/intel/i.test(renderer)) {
      return "macIntel";
    }
  } catch {
    // ignore
  }
  return null;
};

/** 根据浏览器环境识别推荐的桌面端安装包平台 */
export async function detectDownloadPlatform(): Promise<DownloadPlatformKey> {
  if (typeof navigator === "undefined") return "windows";

  const uaData = (
    navigator as Navigator & {
      userAgentData?: {
        platform?: string;
        getHighEntropyValues?: (
          hints: string[],
        ) => Promise<{ architecture?: string; bitness?: string }>;
      };
    }
  ).userAgentData;

  if (uaData) {
    const platform = (uaData.platform || "").toLowerCase();
    let architecture = "";
    try {
      if (uaData.getHighEntropyValues) {
        const values = await uaData.getHighEntropyValues([
          "architecture",
          "bitness",
        ]);
        architecture = (values.architecture || "").toLowerCase();
      }
    } catch {
      // ignore
    }

    if (platform.includes("win")) return "windows";
    if (platform.includes("linux")) {
      return isArmArchitecture(architecture) ? "linuxArm64" : "linux";
    }
    if (platform.includes("mac")) {
      if (isArmArchitecture(architecture)) return "macApple";
      if (architecture.includes("x86") || architecture.includes("amd64")) {
        return "macIntel";
      }
      return detectMacArchByWebGL() || "macApple";
    }
  }

  const ua = (navigator.userAgent || "").toLowerCase();
  const platform = (navigator.platform || "").toLowerCase();

  if (ua.includes("win") || platform.includes("win")) return "windows";

  if (ua.includes("linux") || platform.includes("linux")) {
    return isArmArchitecture(ua) || isArmArchitecture(platform)
      ? "linuxArm64"
      : "linux";
  }

  if (ua.includes("mac") || platform.includes("mac")) {
    return detectMacArchByWebGL() || "macApple";
  }

  return "windows";
}
