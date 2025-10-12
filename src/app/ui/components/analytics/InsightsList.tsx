"use client"

import { List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import * as React from 'react';

export interface InsightItem { text: string; positive: boolean }

export default function InsightsList({ items }: { items: InsightItem[] }) {
  return (
    <List dense>
      {items.map((item, i) => (
        <ListItem key={i} sx={{ py: 0 }}>
          <ListItemIcon sx={{ minWidth: 28 }}>
            {item.positive ? (
              <AddCircleOutlineIcon color="success" fontSize="small" />
            ) : (
              <RemoveCircleOutlineIcon color="error" fontSize="small" />
            )}
          </ListItemIcon>
          <ListItemText primaryTypographyProps={{ variant: 'caption' }} primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
}


