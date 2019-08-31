export class AppLanguage {
  private static language: string;

  static setLanguage(language: string): void {
    AppLanguage.language = language;
  }

  static getLanguage(): string {
    return AppLanguage.language;
  }
}
