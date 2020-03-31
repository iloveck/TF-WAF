import { FormatPhonePipe } from './format-phone.pipe';

describe('FormatPhonePipe', () => {
  it('create an instance', () => {
    const pipe = new FormatPhonePipe();
    expect(pipe).toBeTruthy();
  });
  it('Format phone number without country code', () => {
    const pipe = new FormatPhonePipe();
    expect(pipe.transform("9999999999")).toBe("(999) 999-9999");
  });
  it('Format phone number with country code', () => {
    const pipe = new FormatPhonePipe();
    expect(pipe.transform("19999999999")).toBe("+1 (999) 999-9999");
  });
});
