import { layout, social } from "@/resources/once-ui.config";
import {
  Button,
  Column,
  Icon,
  Logo,
  Row,
  SmartLink,
  ThemeSwitcher,
} from "@once-ui-system/core";

export const Footer = () => {
  return (
    <Column gap="40" fillWidth paddingY="xl" paddingX="l" horizontal="center" position="relative">
      <Row gap="12" textVariant="label-default-m" maxWidth={layout.footer.width} vertical="center">
        <Logo dark href="/" icon="/trademark/icon-dark.svg" size="m" />
        <Logo light href="/" icon="/trademark/icon-light.svg" size="m" />
        {/* Usage of this template requires attribution. Please don't remove the link to Once UI unless you have Once UI Pro subscription. */}
        <Button
          data-border="rounded"
          size="s"
          weight="default"
          variant="tertiary"
          href="https://sapphive.com/whmcs-modules"
        >
          <Row gap="12" vertical="center">
            Launch your WHMCS with Sapphive
            <Icon size="xs" name="arrowUpRight" onBackground="brand-medium" />
          </Row>
        </Button>
      </Row>
      <Row maxWidth={layout.footer.width} horizontal="between" gap="40" wrap paddingX="2">
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="2" marginBottom="8">
            Products
          </Row>
          <Row>
            <SmartLink href="https://sapphive.com/whmcs-modules">PWA Plus for WHMCS</SmartLink>
          </Row>
          <Row>
            <SmartLink href="https://sapphive.com/whmcs-modules">PhonePe for WHMCS</SmartLink>
          </Row>
        </Column>
        <Column gap="12" textVariant="label-default-m">
          <Row paddingX="2" marginBottom="8">
            Resources
          </Row>
          <Row>
            <SmartLink href="https://sapphive.com/legal/terms-of-services">Terms of Service</SmartLink>
          </Row>
          <Row>
            <SmartLink href="https://sapphive.com/legal/privacy-policy">Privacy Policy</SmartLink>
          </Row>
        </Column>
        <Column data-border="rounded" gap="12" textVariant="label-default-m">
          <Row paddingX="2" marginBottom="8">
            Social
          </Row>
          {social.map((link, index) => (
            <Button key={index} href={link.link} weight="default" prefixIcon={link.icon} label={link.name} size="s" variant="secondary" />
          ))}
        </Column>
      </Row>
      <Row maxWidth={layout.footer.width}>
        <ThemeSwitcher />
      </Row>
    </Column>
  );
};
