import {
  DigiHeader,
  DigiHeaderAvatar,
  DigiHeaderNavigation,
  DigiHeaderNavigationItem,
  DigiHeaderNotification,
  DigiIconBellFilled,
} from "@digi/arbetsformedlingen-react";

export default function Header() {
  return (
    <DigiHeader
      afSystemName="Designsystem"
      afHideSystemName={false}
      afMenuButtonText="Meny"
    >
      <a slot="header-logo" aria-label="Designsystemets startsida" href="/"></a>
      <div slot="header-content">
        <DigiHeaderNotification afNotificationAmount={8}>
          <a href="/">
            <DigiIconBellFilled></DigiIconBellFilled>
            Notiser
          </a>
        </DigiHeaderNotification>
      </div>
      <div slot="header-navigation">
        <DigiHeaderNavigation
          afCloseButtonText="Stäng"
          afCloseButtonAriaLabel="Stäng meny"
          afNavAriaLabel="Huvudmeny"
        >
          <DigiHeaderNavigationItem afCurrentPage={true}>
            <a href="/">Mina checklista</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <a href="/">Grupper</a>
          </DigiHeaderNavigationItem>
          <DigiHeaderNavigationItem>
            <a href="/">Kontakt</a>
          </DigiHeaderNavigationItem>
        </DigiHeaderNavigation>
      </div>
    </DigiHeader>
  );
}
