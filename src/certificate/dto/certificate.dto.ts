export class CreateCertificateDTO {
  readonly id?: string;
  readonly name: string;
  readonly date: string;
  readonly company: string;
  readonly image: string;
  readonly companyUrl: string;
  readonly certificateUrl: string;
  readonly important: boolean;
}
