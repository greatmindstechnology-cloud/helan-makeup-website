import { motion } from 'motion/react';

export function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center py-12">
      <motion.div
        className="w-16 h-16 border-4 rounded-full"
        style={{
          borderColor: 'var(--primary)',
          borderTopColor: 'transparent'
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      />
    </div>
  );
}

export function SkeletonCard() {
  return (
    <div className="animate-pulse">
      <div className="bg-gray-300 h-64 rounded-lg mb-4" />
      <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />
      <div className="h-4 bg-gray-300 rounded w-1/2" />
    </div>
  );
}
