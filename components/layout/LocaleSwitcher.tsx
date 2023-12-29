'use client';
import { Button, Menu, MenuItem, MenuProps } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
// import { useLocale } from 'next-intl';
import React, { useTransition } from 'react';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
// import { locales } from '@/middleware';
// import { usePathname, useRouter } from '@/navigation';

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  // const locale = useLocale();
  const router = useRouter();
  // const pathname = usePathname();

  function onSelectChange(nextLocale: string) {
    startTransition(() => {
      // router.replace(pathname, { locale: nextLocale.toLowerCase() });
    });
  }
  const locale = 'lt'
  const locales = ['lt', 'en']
  const renderLanguages = locales.filter((l) => l !== locale).map((lang) => {
    return (
      <MenuItem
        onClick={() => onSelectChange(lang.toUpperCase())}
        key={lang} id={lang}
        disableRipple>
        {lang.toUpperCase()}
      </MenuItem>
    )
  })
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const StyledMenu = styled((props: MenuProps) => (
    <Menu
      elevation={0}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
      }}
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      {...props}
    />
  ))(({ theme }) => ({
    '& .MuiPaper-root': {
      borderRadius: 6,
      marginTop: theme.spacing(1),
      width: 62,
      color:
        theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
      boxShadow:
        'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
      '& .MuiMenu-list': {
        padding: '4px 0',
      },
      '& .MuiMenuItem-root': {
        '& .MuiSvgIcon-root': {
          fontSize: 18,
          color: theme.palette.text.secondary,
          marginRight: theme.spacing(1.5),
        },
        '&:active': {
          backgroundColor: alpha(
            theme.palette.primary.main,
            theme.palette.action.selectedOpacity,
          ),
        },
      },
    },
  }));

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <Button
        sx={{ width: 62 }}
        size='small'
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color={'primary'}
        disableElevation
        onClick={handleClick}
        disabled={isPending}
        endIcon={<KeyboardArrowDownIcon />}
      >
        {locale}
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={() => setAnchorEl(null)}
      >
        {renderLanguages}
      </StyledMenu>
    </>
  );
}
